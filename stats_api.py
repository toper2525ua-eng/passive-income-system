#!/usr/bin/env python3
"""
Passive Income System — Stats API + Telegram Bot
Runs on 127.0.0.1:5050, proxied via nginx /api/
"""
from flask import Flask, jsonify, request
from flask_cors import CORS
from datetime import datetime, date, timedelta
import sqlite3
import os
import threading
import time
import uuid
import random
import requests as req

BOT_TOKEN = "8424430883:AAH6hMh8qqrgN3sRe-1QOfYOJ0xDs4dKuLU"
BOT_ID    = "8424430883"
SITE_URL  = "https://passiveincomesystem.website"
TG_API    = f"https://api.telegram.org/bot{BOT_TOKEN}"
TONAPI_KEY = os.environ.get("TONAPI_KEY", "")   # optional, for higher rate limits


def tg_send(chat_id, text, reply_markup=None):
    payload = {"chat_id": chat_id, "text": text, "parse_mode": "HTML"}
    if reply_markup:
        payload["reply_markup"] = reply_markup
    try:
        req.post(f"{TG_API}/sendMessage", json=payload, timeout=10)
    except Exception:
        pass


def tg_edit(chat_id, message_id, text):
    """Try editMessageText, fall back to editMessageCaption for photo messages."""
    try:
        r = req.post(f"{TG_API}/editMessageText", json={
            "chat_id": chat_id, "message_id": message_id,
            "text": text, "parse_mode": "HTML"
        }, timeout=8)
        if not r.json().get("ok"):
            # Message might be a photo — use editMessageCaption
            req.post(f"{TG_API}/editMessageCaption", json={
                "chat_id": chat_id, "message_id": message_id,
                "caption": text, "parse_mode": "HTML"
            }, timeout=8)
    except Exception:
        pass

def tg_remove_buttons(chat_id, message_id):
    """Remove inline keyboard from a message."""
    try:
        req.post(f"{TG_API}/editMessageReplyMarkup", json={
            "chat_id": chat_id, "message_id": message_id,
            "reply_markup": {"inline_keyboard": []}
        }, timeout=8)
    except Exception:
        pass


def tg_answer_cb(cq_id, text=""):
    try:
        req.post(f"{TG_API}/answerCallbackQuery",
                 json={"callback_query_id": cq_id, "text": text}, timeout=5)
    except Exception:
        pass


def get_all_admin_ids():
    """Return list of numeric admin IDs (including owner)."""
    conn    = get_db()
    entries = [r["entry"] for r in conn.execute("SELECT entry FROM admins").fetchall()]
    conn.close()
    ids = [OWNER_ID]
    for e in entries:
        e = e.strip().lstrip("@")
        if e.lstrip("-").isdigit() and e != OWNER_ID:
            ids.append(e)
    return ids


def handle_start(chat_id, first_name, username=""):
    name = first_name or "друже"

    # Check if this user was added as admin via @username — activate them
    if username:
        conn = get_db()
        row = conn.execute(
            "SELECT id FROM admins WHERE entry = ?", (f"@{username.lower()}",)
        ).fetchone()
        if row:
            # Replace @username entry with numeric ID so bot can notify them
            numeric_id = str(chat_id)
            conn.execute(
                "UPDATE admins SET entry = ? WHERE entry = ?",
                (numeric_id, f"@{username.lower()}")
            )
            conn.commit()
            conn.close()
            tg_send(chat_id,
                f"🔐 <b>Доступ адміна активовано!</b>\n\n"
                f"Привіт, {name}! Тебе додали як адміна боту.\n"
                f"Тепер ти будеш отримувати сповіщення про нових учасників "
                f"та зможеш підтверджувати або видаляти їх."
            )
            return
        conn.close()

    text = (
        f"👋 Привіт, {name}!\n\n"
        "Тут зібрана система пасивного доходу — торгові боти, "
        "інструкції, закритий канал.\n\n"
        "Натисни кнопку нижче, щоб відкрити систему 👇"
    )
    markup = {
        "inline_keyboard": [[
            {"text": "🚀 Відкрити систему", "web_app": {"url": SITE_URL}}
        ]]
    }
    tg_send(chat_id, text, markup)


def handle_setchannel(chat_id, text):
    if str(chat_id) != OWNER_ID:
        tg_send(chat_id, "⛔ Тільки власник може встановлювати канал.")
        return
    parts = text.strip().split(maxsplit=1)
    if len(parts) < 2 or not parts[1].strip():
        current = get_cfg("channel_id") or "не встановлено"
        tg_send(chat_id,
            f"📡 Поточний канал ID:\n<code>{current}</code>\n\n"
            "Щоб встановити:\n<code>/setchannel -100123456789</code>"
        )
        return
    new_id = parts[1].strip()
    set_cfg("channel_id", new_id)
    tg_send(chat_id, f"✅ Channel ID збережено:\n<code>{new_id}</code>")


def handle_setwallet(chat_id, text):
    if str(chat_id) != OWNER_ID:
        tg_send(chat_id, "⛔ Тільки власник може змінювати гаманець.")
        return
    parts = text.strip().split(maxsplit=1)
    if len(parts) < 2 or not parts[1].strip():
        current = get_cfg("ton_wallet") or "не встановлено"
        tg_send(chat_id,
            f"💳 Поточний гаманець:\n<code>{current}</code>\n\n"
            "Щоб змінити, надішли:\n<code>/setwallet UQA...</code>"
        )
        return
    new_wallet = parts[1].strip()
    set_cfg("ton_wallet", new_wallet)
    tg_send(chat_id,
        f"✅ TON гаманець оновлено:\n<code>{new_wallet}</code>"
    )


def notify_admins_new_member(uid, first_name, username, channel_id, has_paid):
    """Send notification to all admins when someone joins the channel."""
    name_str = first_name or (f"@{username}" if username else f"ID {uid}")
    if username:
        name_str += f" (@{username})"
    paid_line = "✅ Оплата знайдена в системі" if has_paid else "❌ Оплати не знайдено"
    text = (
        f"👤 <b>Новий учасник каналу</b>\n\n"
        f"Ім'я: {name_str}\n"
        f"ID: <code>{uid}</code>\n"
        f"Оплата: {paid_line}"
    )
    markup = {"inline_keyboard": [[
        {"text": "✅ Підтвердити", "callback_data": f"apr_{uid}"},
        {"text": "🚫 Видалити",    "callback_data": f"kck_{uid}"},
    ]]}
    for admin_id in get_all_admin_ids():
        tg_send(admin_id, text, markup)


def handle_callback_query(update):
    cq      = update.get("callback_query", {})
    cq_id   = cq.get("id")
    data    = cq.get("data", "")
    from_id = str(cq.get("from", {}).get("id", ""))
    msg     = cq.get("message", {})
    msg_id  = msg.get("message_id")
    chat_id = str(msg.get("chat", {}).get("id", ""))
    orig_text = msg.get("text", "")

    tg_answer_cb(cq_id)

    # Only admins can use buttons
    admin_ids = get_all_admin_ids()
    if from_id not in admin_ids:
        tg_answer_cb(cq_id, "⛔ Немає доступу")
        return

    channel_id = get_cfg("channel_id")

    def notify_all_admins_action(action_text, exclude_id=None):
        """Send action result to all admins except the one who acted."""
        for aid in get_all_admin_ids():
            if aid != exclude_id:
                tg_send(aid, action_text)

    if data.startswith("apr_"):
        uid = data[4:]
        conn = get_db()
        paid = conn.execute(
            "SELECT id FROM orders WHERE tg_user_id=? AND status='paid'", (uid,)
        ).fetchone()
        if not paid:
            save_member(uid, "", "", "member")
            conn.execute(
                "INSERT INTO orders (id, tg_user_id, amount_usdt, memo, status, created_at, expires_at, verified_at) "
                "VALUES (?,?,?,?,'paid',?,?,?)",
                (str(uuid.uuid4()), uid, 0, "manual-confirm",
                 datetime.now().isoformat(), datetime.now().isoformat(), datetime.now().isoformat())
            )
            conn.commit()
            conn.close()
            tg_remove_buttons(chat_id, msg_id)
            tg_send(from_id, f"✅ <b>Підтверджено</b>\nЮзер <code>{uid}</code> доданий до каналу.")
            notify_all_admins_action(f"✅ <b>Адмін підтвердив</b> юзера <code>{uid}</code>", exclude_id=from_id)
        else:
            conn.close()
            tg_answer_cb(cq_id, "⚠️ Вже підтверджено раніше")

    elif data.startswith("kck_"):
        uid = data[4:]
        if channel_id:
            try:
                req.post(f"{TG_API}/banChatMember",
                         json={"chat_id": channel_id, "user_id": uid}, timeout=8)
            except Exception:
                pass
        save_member(uid, "", "", "kicked")
        tg_remove_buttons(chat_id, msg_id)
        tg_send(from_id, f"🚫 <b>Видалено</b>\nЮзер <code>{uid}</code> видалений з каналу.")
        notify_all_admins_action(f"🚫 <b>Адмін видалив</b> юзера <code>{uid}</code>", exclude_id=from_id)

    elif data.startswith("cpay_"):
        uid = data[5:]
        conn = get_db()
        paid = conn.execute(
            "SELECT id FROM orders WHERE tg_user_id=? AND status='paid'", (uid,)
        ).fetchone()
        if not paid:
            conn.execute(
                "INSERT INTO orders (id, tg_user_id, amount_usdt, memo, status, created_at, expires_at, verified_at) "
                "VALUES (?,?,?,?,'paid',?,?,?)",
                (str(uuid.uuid4()), uid, 0, "card-receipt",
                 datetime.now().isoformat(), datetime.now().isoformat(), datetime.now().isoformat())
            )
            conn.commit()
            conn.close()
            access_link = get_cfg("ton_access_link")
            if access_link and uid:
                tg_send(uid,
                    "✅ <b>Оплату підтверджено!</b>\n\n"
                    "Ось твоє посилання для доступу до системи 👇\n"
                    f"{access_link}"
                )
            tg_remove_buttons(chat_id, msg_id)
            tg_send(from_id, f"✅ <b>Оплату підтверджено!</b>\nДоступ надіслано юзеру <code>{uid}</code>.")
            notify_all_admins_action(f"✅ <b>Адмін підтвердив оплату</b> юзера <code>{uid}</code>. Доступ надіслано.", exclude_id=from_id)
        else:
            conn.close()
            # Already confirmed — just show silent popup, no extra message
            tg_answer_cb(cq_id, "⚠️ Вже підтверджено раніше")

    elif data.startswith("decl_"):
        uid = data[5:]
        tg_send(uid,
            "❌ <b>Оплату не підтверджено</b>\n\n"
            "Будь ласка, надішли правильний скріншот або зв'яжись з адміном."
        )
        tg_remove_buttons(chat_id, msg_id)
        tg_send(from_id, f"❌ <b>Оплату відхилено.</b>\nЮзеру <code>{uid}</code> надіслано відмову.")
        notify_all_admins_action(f"❌ <b>Адмін відхилив оплату</b> юзера <code>{uid}</code>.", exclude_id=from_id)

    elif data.startswith("banu_"):
        uid = data[5:]
        set_cfg(f"banned_{uid}", "1")
        tg_send(uid, "⛔ Вас заблоковано. Зверніться до адміна.")
        tg_remove_buttons(chat_id, msg_id)
        tg_send(from_id, f"⛔ <b>Юзера заблоковано.</b>\n<code>{uid}</code> більше не може надсилати заявки.")
        notify_all_admins_action(f"⛔ <b>Адмін заблокував</b> юзера <code>{uid}</code>.", exclude_id=from_id)


def handle_chat_member_update(update):
    """Track who joins or leaves the private channel."""
    cm   = update.get("chat_member") or update.get("my_chat_member", {})
    if not cm:
        return
    chat       = cm.get("chat", {})
    chat_id    = str(chat.get("id", ""))
    new_mem    = cm.get("new_chat_member", {})
    old_mem    = cm.get("old_chat_member", {})
    user       = new_mem.get("user", {})
    uid        = str(user.get("id", ""))
    status     = new_mem.get("status", "")
    old_status = old_mem.get("status", "")

    # Bot itself was added as admin → save channel_id
    if uid == BOT_ID:
        if status in ("administrator", "member"):
            set_cfg("channel_id", chat_id)
            tg_send(OWNER_ID, f"✅ Бот доданий як адмін каналу\nChannel ID збережено: <code>{chat_id}</code>")
        return

    if not uid or not status:
        return

    username   = user.get("username", "")
    first_name = user.get("first_name", "")
    joined_at  = datetime.now().isoformat() if status == "member" else ""
    save_member(uid, username, first_name, status, joined_at)

    # Notify on any new join (member or creator status, from any previous state)
    if status in ("member", "creator", "administrator") and old_status in ("left", "kicked", ""):
        conn     = get_db()
        has_paid = conn.execute(
            "SELECT id FROM orders WHERE tg_user_id=? AND status='paid'", (uid,)
        ).fetchone() is not None
        conn.close()
        notify_admins_new_member(uid, first_name, username, chat_id, has_paid)


def poll_bot():
    offset = 0
    # Notify owner that bot started
    try:
        channel_id = get_cfg("channel_id") or "не встановлено"
        tg_send(OWNER_ID,
            f"🤖 <b>Бот запущено</b>\n"
            f"Channel ID: <code>{channel_id}</code>\n"
            f"Слухаю chat_member оновлення…"
        )
    except Exception:
        pass
    while True:
        try:
            resp = req.post(
                f"{TG_API}/getUpdates",
                json={
                    "offset": offset,
                    "timeout": 30,
                    "allowed_updates": ["message", "chat_member", "my_chat_member", "callback_query"],
                },
                timeout=35,
            )
            updates = resp.json().get("result", [])
            for u in updates:
                offset = u["update_id"] + 1
                # Chat member events
                if "chat_member" in u or "my_chat_member" in u:
                    handle_chat_member_update(u)
                    continue
                # Callback query (button press)
                if "callback_query" in u:
                    handle_callback_query(u)
                    continue
                msg     = u.get("message", {})
                text    = msg.get("text", "")
                chat_id  = msg.get("chat", {}).get("id")
                first    = msg.get("from", {}).get("first_name", "")
                username = msg.get("from", {}).get("username", "")
                if text.startswith("/start") and chat_id:
                    handle_start(chat_id, first, username)
                elif text.startswith("/setwallet") and chat_id:
                    handle_setwallet(chat_id, text)
                elif text.startswith("/setchannel") and chat_id:
                    handle_setchannel(chat_id, text)
                elif text.startswith("/admins") and chat_id:
                    if str(chat_id) == OWNER_ID:
                        admin_ids = get_all_admin_ids()
                        lines = [f"👥 <b>Список адмінів ({len(admin_ids)}):</b>\n"]
                        for aid in admin_ids:
                            # Try to send test ping
                            try:
                                r = req.post(f"{TG_API}/sendMessage", json={
                                    "chat_id": aid,
                                    "text": "🔔 Тест сповіщення — ти активний адмін.",
                                    "parse_mode": "HTML"
                                }, timeout=8)
                                ok = r.json().get("ok", False)
                                status = "✅ активний" if ok else "❌ не запустив бота"
                            except Exception:
                                status = "⚠️ помилка"
                            tag = " (власник)" if aid == OWNER_ID else ""
                            lines.append(f"• <code>{aid}</code>{tag} — {status}")
                        tg_send(chat_id, "\n".join(lines))
                elif text.startswith("/test") and chat_id:
                    if str(chat_id) == OWNER_ID:
                        channel_id = get_cfg("channel_id") or "не встановлено"
                        conn = get_db()
                        members_count = conn.execute("SELECT COUNT(*) as c FROM channel_members").fetchone()["c"]
                        orders_count  = conn.execute("SELECT COUNT(*) as c FROM orders WHERE status='paid'").fetchone()["c"]
                        conn.close()
                        tg_send(chat_id,
                            f"✅ <b>Бот працює</b>\n\n"
                            f"Channel ID: <code>{channel_id}</code>\n"
                            f"Підписників в БД: {members_count}\n"
                            f"Оплачених замовлень: {orders_count}\n\n"
                            f"Слухаю: message, chat_member, my_chat_member, callback_query"
                        )
                elif text and chat_id and not text.startswith("/"):
                    # User wrote a free-form message → forward to all admins
                    admin_ids = get_all_admin_ids()
                    if str(chat_id) not in admin_ids:
                        user_str = f"@{username}" if username else f"ID {chat_id}"
                        forward_text = (
                            f"💬 <b>Повідомлення від користувача</b>\n\n"
                            f"Від: {first} ({user_str})\n"
                            f"ID: <code>{chat_id}</code>\n\n"
                            f"<i>{text}</i>"
                        )
                        reply_markup = {"inline_keyboard": [[
                            {"text": "↩️ Відповісти", "url": f"tg://user?id={chat_id}"}
                        ]]}
                        for admin_id in admin_ids:
                            tg_send(admin_id, forward_text, reply_markup)
                        tg_send(chat_id, "✅ Повідомлення отримано. Адмін відповість найближчим часом.")
        except Exception:
            time.sleep(5)

app = Flask(__name__)
CORS(app, origins=[
    "https://passiveincomesystem.website",
    "https://www.passiveincomesystem.website",
    "http://localhost",
    "http://127.0.0.1",
])

DB_PATH   = os.path.join(os.path.dirname(__file__), "stats.db")
ADMIN_KEY = "pisystem_admin_2026"
OWNER_ID  = "6400309586"
USDT_DECIMALS = 1_000_000   # USDT has 6 decimals on TON


def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    conn = get_db()
    conn.execute("""
        CREATE TABLE IF NOT EXISTS visits (
            id      INTEGER PRIMARY KEY AUTOINCREMENT,
            ts      TEXT    NOT NULL,
            screen  TEXT    DEFAULT '',
            event   TEXT    DEFAULT 'view'
        )
    """)
    conn.execute("""
        CREATE TABLE IF NOT EXISTS admins (
            id      INTEGER PRIMARY KEY AUTOINCREMENT,
            entry   TEXT    UNIQUE NOT NULL
        )
    """)
    conn.execute("""
        CREATE TABLE IF NOT EXISTS screenshots (
            id      INTEGER PRIMARY KEY AUTOINCREMENT,
            type    TEXT    NOT NULL DEFAULT 'results',
            label   TEXT    NOT NULL DEFAULT '',
            src     TEXT    NOT NULL,
            created TEXT    NOT NULL
        )
    """)
    conn.execute("""
        CREATE TABLE IF NOT EXISTS config (
            key     TEXT PRIMARY KEY,
            value   TEXT NOT NULL DEFAULT ''
        )
    """)
    conn.execute("""
        CREATE TABLE IF NOT EXISTS channel_members (
            tg_user_id  TEXT PRIMARY KEY,
            username    TEXT DEFAULT '',
            first_name  TEXT DEFAULT '',
            status      TEXT DEFAULT 'member',
            joined_at   TEXT DEFAULT '',
            updated_at  TEXT NOT NULL
        )
    """)
    conn.execute("""
        CREATE TABLE IF NOT EXISTS orders (
            id          TEXT PRIMARY KEY,
            tg_user_id  TEXT NOT NULL,
            amount_usdt REAL NOT NULL DEFAULT 100.0,
            memo        TEXT NOT NULL,
            status      TEXT NOT NULL DEFAULT 'pending',
            tx_hash     TEXT,
            created_at  TEXT NOT NULL,
            expires_at  TEXT NOT NULL,
            verified_at TEXT
        )
    """)
    conn.commit()
    conn.close()


# ── Config helpers ──────────────────────────────────────────────────────────

def get_cfg(key, default=""):
    conn = get_db()
    row  = conn.execute("SELECT value FROM config WHERE key=?", (key,)).fetchone()
    conn.close()
    return row["value"] if row else default

def save_member(tg_user_id, username, first_name, status, joined_at=""):
    conn = get_db()
    now  = datetime.now().isoformat()
    conn.execute("""
        INSERT INTO channel_members (tg_user_id, username, first_name, status, joined_at, updated_at)
        VALUES (?, ?, ?, ?, ?, ?)
        ON CONFLICT(tg_user_id) DO UPDATE SET
            username=excluded.username,
            first_name=excluded.first_name,
            status=excluded.status,
            joined_at=CASE WHEN excluded.joined_at != '' THEN excluded.joined_at ELSE joined_at END,
            updated_at=excluded.updated_at
    """, (str(tg_user_id), username or "", first_name or "", status, joined_at, now))
    conn.commit()
    conn.close()


def set_cfg(key, value):
    conn = get_db()
    conn.execute("INSERT OR REPLACE INTO config (key, value) VALUES (?, ?)", (key, value))
    conn.commit()
    conn.close()


# ── TON payment helpers ─────────────────────────────────────────────────────

def _extract_memo(tx):
    """Extract text memo/comment from a TON transaction dict."""
    in_msg  = tx.get("in_msg", {})
    decoded = in_msg.get("decoded_body") or {}

    fwd = decoded.get("forward_payload")
    if isinstance(fwd, dict):
        val = fwd.get("value")
        if isinstance(val, dict):
            inner = val.get("value")
            if isinstance(inner, dict) and "text" in inner:
                return inner["text"]
            if "text" in val:
                return val["text"]
            payload = val.get("payload")
            if payload:
                try:
                    return bytes.fromhex(payload).decode("utf-8")
                except Exception:
                    pass

    payload = decoded.get("payload")
    if payload and isinstance(payload, str):
        try:
            return bytes.fromhex(payload).decode("utf-8")
        except Exception:
            pass

    if decoded.get("text"):
        return decoded["text"]
    if in_msg.get("comment"):
        return in_msg["comment"]
    return None


def check_ton_transaction(wallet, expected_memo, expected_amount_raw):
    """Query tonapi.io for a matching USDT jetton_notify transaction.
    Returns (status: str, tx_hash: str|None)
      status: 'verified' | 'not_found' | 'wrong_amount' | 'api_error'
    """
    url     = f"https://tonapi.io/v2/blockchain/accounts/{wallet}/transactions?limit=100"
    headers = {}
    if TONAPI_KEY:
        headers["Authorization"] = f"Bearer {TONAPI_KEY}"
    try:
        r = req.get(url, headers=headers, timeout=15)
        if r.status_code == 429:
            return "api_error", None
        if r.status_code != 200:
            return "api_error", None
        for tx in r.json().get("transactions", []):
            in_msg = tx.get("in_msg", {})
            if in_msg.get("decoded_op_name") != "jetton_notify":
                continue
            memo = _extract_memo(tx)
            if not memo or memo.strip() != expected_memo:
                continue
            # Memo matched — check amount
            decoded    = in_msg.get("decoded_body") or {}
            raw_amount = decoded.get("amount")
            if not raw_amount:
                # Memo matched but can't read amount — approve anyway
                return "verified", tx.get("hash", "")
            try:
                amount = int(raw_amount)
            except (ValueError, TypeError):
                return "verified", tx.get("hash", "")
            if amount >= expected_amount_raw:
                return "verified", tx.get("hash", "")
            else:
                # Memo matched but amount too low
                return "wrong_amount", tx.get("hash", "")
    except Exception:
        return "api_error", None
    return "not_found", None


# ── Existing routes ──────────────────────────────────────────────────────────

@app.route("/api/track", methods=["POST", "OPTIONS"])
def track():
    if request.method == "OPTIONS":
        return jsonify({"ok": True})
    data   = request.get_json(silent=True) or {}
    screen = data.get("screen", "")
    event  = data.get("event", "view")
    conn   = get_db()
    conn.execute(
        "INSERT INTO visits (ts, screen, event) VALUES (?, ?, ?)",
        (datetime.now().isoformat(), screen, event),
    )
    conn.commit()
    conn.close()
    return jsonify({"ok": True})



@app.route("/api/check-admin", methods=["GET"])
def check_admin():
    tg_id    = request.args.get("id", "")
    username = request.args.get("username", "").lower()
    if tg_id == OWNER_ID:
        return jsonify({"admin": True})
    conn    = get_db()
    entries = [r["entry"] for r in conn.execute("SELECT entry FROM admins").fetchall()]
    conn.close()
    is_admin = tg_id in entries or (username and ("@" + username) in entries)
    return jsonify({"admin": is_admin})


@app.route("/api/admins", methods=["GET"])
def get_admins():
    if request.args.get("key") != ADMIN_KEY:
        return jsonify({"error": "unauthorized"}), 401
    conn    = get_db()
    entries = [r["entry"] for r in conn.execute("SELECT entry FROM admins ORDER BY id").fetchall()]
    conn.close()
    return jsonify({"owner": OWNER_ID, "admins": entries})


@app.route("/api/admins", methods=["POST"])
def add_admin():
    if request.args.get("key") != ADMIN_KEY:
        return jsonify({"error": "unauthorized"}), 401
    data  = request.get_json(silent=True) or {}
    entry = data.get("entry", "").strip()
    if not entry:
        return jsonify({"error": "empty"}), 400
    conn = get_db()
    already_exists = conn.execute("SELECT id FROM admins WHERE entry = ?", (entry,)).fetchone()
    if not already_exists:
        try:
            conn.execute("INSERT INTO admins (entry) VALUES (?)", (entry,))
            conn.commit()
        except sqlite3.IntegrityError:
            pass
    conn.close()

    # Notify the new admin
    if entry.lstrip("-").isdigit():
        # Numeric ID — try to send directly
        payload = {
            "chat_id": entry,
            "text": (
                "🔐 <b>Тебе додали як адміна!</b>\n\n"
                "Тепер ти будеш отримувати сповіщення про нових учасників "
                "та зможеш підтверджувати або видаляти їх.\n\n"
                "✅ Доступ активовано автоматично."
            ),
            "parse_mode": "HTML"
        }
        try:
            r = req.post(f"{TG_API}/sendMessage", json=payload, timeout=10)
            result = r.json()
            if not result.get("ok"):
                # Failed — admin hasn't started the bot
                tg_send(OWNER_ID,
                    f"⚠️ Адміна <code>{entry}</code> додано, але він ще не запустив бота.\n"
                    f"Попроси його написати /start боту @Passive_Income_SystemBot, "
                    f"щоб отримувати сповіщення."
                )
        except Exception:
            pass
    else:
        # @username — can't send directly, notify owner
        tg_send(OWNER_ID,
            f"ℹ️ Адміна <code>{entry}</code> додано.\n"
            f"Щоб активувати доступ — попроси їх написати /start боту @Passive_Income_SystemBot"
        )

    return jsonify({"ok": True})


@app.route("/api/admins/remove", methods=["POST"])
def remove_admin():
    if request.args.get("key") != ADMIN_KEY:
        return jsonify({"error": "unauthorized"}), 401
    data  = request.get_json(silent=True) or {}
    entry = data.get("entry", "").strip()
    if not entry or entry == OWNER_ID:
        return jsonify({"error": "cannot remove owner"}), 400
    conn = get_db()
    conn.execute("DELETE FROM admins WHERE entry = ?", (entry,))
    conn.commit()
    conn.close()
    return jsonify({"ok": True})


@app.route("/api/screenshots", methods=["GET"])
def get_screenshots():
    conn = get_db()
    rows = conn.execute(
        "SELECT id, type, label, src FROM screenshots ORDER BY id"
    ).fetchall()
    conn.close()
    result = {"results": [], "reviews": [], "process": []}
    for r in rows:
        t = r["type"]
        if t in result:
            result[t].append({"id": r["id"], "label": r["label"], "src": r["src"]})
    return jsonify(result)


@app.route("/api/screenshots", methods=["POST"])
def add_screenshot():
    if request.args.get("key") != ADMIN_KEY:
        return jsonify({"error": "unauthorized"}), 401
    data  = request.get_json(silent=True) or {}
    type_ = data.get("type", "results")
    label = data.get("label", "")
    src   = data.get("src", "")
    if not src:
        return jsonify({"error": "empty src"}), 400
    if type_ not in ("results", "reviews", "process"):
        return jsonify({"error": "invalid type"}), 400
    conn   = get_db()
    cursor = conn.execute(
        "INSERT INTO screenshots (type, label, src, created) VALUES (?, ?, ?, ?)",
        (type_, label, src, datetime.now().isoformat()),
    )
    new_id = cursor.lastrowid
    conn.commit()
    conn.close()
    return jsonify({"ok": True, "id": new_id})


@app.route("/api/screenshots/<int:shot_id>", methods=["DELETE"])
def delete_screenshot(shot_id):
    if request.args.get("key") != ADMIN_KEY:
        return jsonify({"error": "unauthorized"}), 401
    conn = get_db()
    conn.execute("DELETE FROM screenshots WHERE id = ?", (shot_id,))
    conn.commit()
    conn.close()
    return jsonify({"ok": True})


# ── Crypto (TRC/BEP) config (admin) ─────────────────────────────────────────

@app.route("/api/config/crypto", methods=["GET"])
def get_crypto_config():
    if request.args.get("key") != ADMIN_KEY:
        return jsonify({"error": "unauthorized"}), 401
    return jsonify({
        "trc_wallet": get_cfg("trc_wallet"),
        "bep_wallet": get_cfg("bep_wallet"),
    })


@app.route("/api/config/crypto", methods=["POST"])
def set_crypto_config():
    if request.args.get("key") != ADMIN_KEY:
        return jsonify({"error": "unauthorized"}), 401
    data = request.get_json(silent=True) or {}
    if "trc_wallet" in data:
        set_cfg("trc_wallet", data["trc_wallet"].strip())
    if "bep_wallet" in data:
        set_cfg("bep_wallet", data["bep_wallet"].strip())
    return jsonify({"ok": True})


# ── TON config (admin) ───────────────────────────────────────────────────────

@app.route("/api/config/ton", methods=["GET"])
def get_ton_config():
    if request.args.get("key") != ADMIN_KEY:
        return jsonify({"error": "unauthorized"}), 401
    return jsonify({
        "wallet":      get_cfg("ton_wallet"),
        "price":       get_cfg("ton_price", "100"),
        "access_link": get_cfg("ton_access_link"),
    })


@app.route("/api/config/ton", methods=["POST"])
def set_ton_config():
    if request.args.get("key") != ADMIN_KEY:
        return jsonify({"error": "unauthorized"}), 401
    data = request.get_json(silent=True) or {}
    # Wallet can ONLY be set via Telegram bot command /setwallet — never via web
    if "price" in data:
        set_cfg("ton_price",       str(data["price"]).strip())
    if "access_link" in data:
        set_cfg("ton_access_link", data["access_link"].strip())
    return jsonify({"ok": True})


# ── Links config (admin) ─────────────────────────────────────────────────────

@app.route("/api/config/links", methods=["GET"])
def get_links_config():
    if request.args.get("key") != ADMIN_KEY:
        return jsonify({"error": "unauthorized"}), 401
    return jsonify({
        "telegram":   get_cfg("links_telegram"),
        "payment":    get_cfg("links_payment"),
        "bybit":      get_cfg("links_bybit"),
        "card":       get_cfg("links_card"),
        "channel":    get_cfg("links_channel"),
        "channel_id": get_cfg("channel_id"),
        "price":      get_cfg("ton_price", "100"),
    })


@app.route("/api/config/links", methods=["POST"])
def set_links_config():
    if request.args.get("key") != ADMIN_KEY:
        return jsonify({"error": "unauthorized"}), 401
    data = request.get_json(silent=True) or {}
    if "telegram" in data:
        set_cfg("links_telegram", data["telegram"].strip())
    if "payment" in data:
        set_cfg("links_payment",  data["payment"].strip())
    if "bybit" in data:
        set_cfg("links_bybit",    data["bybit"].strip())
    if "card" in data:
        set_cfg("links_card",     data["card"].strip())
    if "channel" in data:
        set_cfg("links_channel",  data["channel"].strip())
    if "channel_id" in data and data["channel_id"].strip():
        set_cfg("channel_id", data["channel_id"].strip())
    return jsonify({"ok": True})


# ── Card payment receipt ─────────────────────────────────────────────────────

@app.route("/api/receipt", methods=["POST", "OPTIONS"])
def submit_receipt():
    if request.method == "OPTIONS":
        return jsonify({"ok": True})
    data     = request.get_json(silent=True) or {}
    uid      = str(data.get("uid", "")).strip()
    name     = data.get("name", "Невідомий")
    username = data.get("username", "")
    text     = data.get("text", "").strip()
    network  = data.get("network", "").strip()
    image_b64 = data.get("image", "")  # data:image/...;base64,...

    # Check banned
    if uid and get_cfg(f"banned_{uid}") == "1":
        return jsonify({"error": "banned"}), 403

    name_str = name
    if username:
        name_str += f" (@{username})"

    conn     = get_db()
    has_paid = conn.execute(
        "SELECT id FROM orders WHERE tg_user_id=? AND status='paid'", (uid,)
    ).fetchone() is not None
    conn.close()

    paid_line = "✅ Оплата вже є в системі" if has_paid else "❓ Нова оплата"
    caption = (
        f"💳 <b>Квитанція про оплату</b>\n\n"
        f"Від: {name_str}\n"
        f"ID: <code>{uid}</code>\n"
        f"Статус: {paid_line}"
    )
    if network:
        caption += f"\nМережа: {network}"
    if text:
        caption += f"\n\nКоментар: {text}"

    markup = {"inline_keyboard": [[
        {"text": "✅ Підтвердити", "callback_data": f"cpay_{uid}"},
        {"text": "❌ Відхилити",   "callback_data": f"decl_{uid}"},
        {"text": "⛔ Заблокувати", "callback_data": f"banu_{uid}"},
    ]]}

    admin_ids = get_all_admin_ids()

    if image_b64 and "base64," in image_b64:
        # Decode and send as photo
        import base64 as b64mod
        header, encoded = image_b64.split("base64,", 1)
        img_bytes = b64mod.b64decode(encoded)
        for admin_id in admin_ids:
            try:
                import json as _json
                req.post(
                    f"{TG_API}/sendPhoto",
                    data={"chat_id": admin_id, "caption": caption,
                          "parse_mode": "HTML",
                          "reply_markup": _json.dumps(markup)},
                    files={"photo": ("receipt.jpg", img_bytes, "image/jpeg")},
                    timeout=15,
                )
            except Exception:
                pass
    else:
        for admin_id in admin_ids:
            tg_send(admin_id, caption, markup)

    return jsonify({"ok": True})


# ── Channel members ──────────────────────────────────────────────────────────

@app.route("/api/channel/members", methods=["GET"])
def get_channel_members():
    if request.args.get("key") != ADMIN_KEY:
        return jsonify({"error": "unauthorized"}), 401
    search = request.args.get("q", "").lower().strip()
    conn   = get_db()
    rows   = conn.execute(
        "SELECT tg_user_id, username, first_name, status, joined_at, updated_at "
        "FROM channel_members ORDER BY updated_at DESC"
    ).fetchall()
    conn.close()
    members = [dict(r) for r in rows]
    if search:
        members = [
            m for m in members
            if search in m["tg_user_id"]
            or search in (m["username"] or "").lower()
            or search in (m["first_name"] or "").lower()
        ]
    return jsonify({"channel_id": get_cfg("channel_id"), "members": members})


@app.route("/api/channel/sync", methods=["POST"])
def sync_channel_members():
    """Check all known users (any order status) via getChatMember."""
    if request.args.get("key") != ADMIN_KEY:
        return jsonify({"error": "unauthorized"}), 401
    channel_id = get_cfg("channel_id")
    if not channel_id:
        return jsonify({"error": "channel_id not set — введи ID каналу в налаштуваннях"}), 400

    conn       = get_db()
    # All users who ever had any order
    all_users  = conn.execute(
        "SELECT DISTINCT tg_user_id FROM orders"
    ).fetchall()
    # Plus anyone already tracked
    tracked    = conn.execute(
        "SELECT DISTINCT tg_user_id FROM channel_members"
    ).fetchall()
    conn.close()

    user_ids = {r["tg_user_id"] for r in all_users} | {r["tg_user_id"] for r in tracked}

    checked = 0
    for uid in user_ids:
        try:
            r    = req.get(f"{TG_API}/getChatMember",
                           params={"chat_id": channel_id, "user_id": uid}, timeout=6)
            data = r.json()
            if not data.get("ok"):
                continue
            member     = data["result"]
            status     = member.get("status", "left")
            user_obj   = member.get("user", {})
            username   = user_obj.get("username", "")
            first_name = user_obj.get("first_name", "")
            save_member(uid, username, first_name, status)
            checked += 1
        except Exception:
            pass

    conn     = get_db()
    all_rows = conn.execute(
        "SELECT tg_user_id, username, first_name, status, joined_at, updated_at "
        "FROM channel_members ORDER BY updated_at DESC"
    ).fetchall()
    conn.close()
    return jsonify({"ok": True, "checked": checked, "members": [dict(r) for r in all_rows]})


# ── Payment endpoints ────────────────────────────────────────────────────────

@app.route("/api/payment/create-order", methods=["POST"])
def create_order():
    data       = request.get_json(silent=True) or {}
    tg_user_id = str(data.get("tg_user_id", "")).strip()
    if not tg_user_id:
        return jsonify({"error": "missing tg_user_id"}), 400

    wallet = get_cfg("ton_wallet")
    if not wallet:
        return jsonify({"error": "payment_not_configured"}), 503

    try:
        price = float(get_cfg("ton_price", "100"))
    except ValueError:
        price = 100.0

    conn = get_db()
    now_str = datetime.now().isoformat()

    # Return existing pending order if still valid AND price hasn't changed
    existing = conn.execute(
        "SELECT * FROM orders WHERE tg_user_id=? AND status='pending' AND expires_at>?",
        (tg_user_id, now_str)
    ).fetchone()
    if existing:
        if abs(float(existing["amount_usdt"]) - price) < 0.01:
            # Price unchanged — return existing order
            conn.close()
            return jsonify({
                "order_id":       existing["id"],
                "wallet_address": wallet,
                "amount_usdt":    existing["amount_usdt"],
                "memo":           existing["memo"],
                "expires_at":     existing["expires_at"],
            })
        else:
            # Price changed — expire old order, create new one
            conn.execute(
                "UPDATE orders SET status='expired' WHERE id=?", (existing["id"],)
            )
            conn.commit()

    # Expire old pending orders for this user
    conn.execute(
        "UPDATE orders SET status='expired' WHERE tg_user_id=? AND status='pending'",
        (tg_user_id,)
    )

    # Generate unique 8-digit memo
    while True:
        memo = str(random.randint(10000000, 99999999))
        if not conn.execute(
            "SELECT id FROM orders WHERE memo=? AND status='pending'", (memo,)
        ).fetchone():
            break

    order_id   = str(uuid.uuid4())
    created_at = datetime.now()
    expires_at = created_at + timedelta(minutes=30)

    conn.execute(
        "INSERT INTO orders (id, tg_user_id, amount_usdt, memo, status, created_at, expires_at) "
        "VALUES (?,?,?,?,?,?,?)",
        (order_id, tg_user_id, price, memo, "pending",
         created_at.isoformat(), expires_at.isoformat())
    )
    conn.commit()
    conn.close()

    return jsonify({
        "order_id":       order_id,
        "wallet_address": wallet,
        "amount_usdt":    price,
        "memo":           memo,
        "expires_at":     expires_at.isoformat(),
    })


@app.route("/api/payment/verify", methods=["POST"])
def verify_payment():
    data       = request.get_json(silent=True) or {}
    order_id   = str(data.get("order_id",   "")).strip()
    tg_user_id = str(data.get("tg_user_id", "")).strip()

    conn  = get_db()
    order = conn.execute(
        "SELECT * FROM orders WHERE id=? AND tg_user_id=?", (order_id, tg_user_id)
    ).fetchone()

    if not order:
        conn.close()
        return jsonify({"error": "not found"}), 404

    if order["status"] == "paid":
        conn.close()
        return jsonify({"status": "already_paid"})

    now_str = datetime.now().isoformat()
    if order["status"] == "expired" or order["expires_at"] < now_str:
        conn.execute("UPDATE orders SET status='expired' WHERE id=?", (order_id,))
        conn.commit()
        conn.close()
        return jsonify({"status": "expired"}), 410

    wallet       = get_cfg("ton_wallet")
    expected_raw = int(order["amount_usdt"] * USDT_DECIMALS)

    tx_status, tx_hash = check_ton_transaction(wallet, order["memo"], expected_raw)

    if tx_status == "api_error":
        conn.close()
        # Notify admins to manually confirm
        name_str = f"ID: {tg_user_id}"
        for admin_id in get_all_admin_ids():
            tg_send(admin_id,
                f"⚠️ <b>TON оплата — потрібна ручна перевірка</b>\n\n"
                f"Юзер: <code>{tg_user_id}</code>\n"
                f"Memo: <code>{order['memo']}</code>\n"
                f"Сума: {order['amount_usdt']} USDT\n\n"
                f"API тонapi.io недоступний. Перевір вручну і підтвердь:",
                {"inline_keyboard": [[
                    {"text": "✅ Підтвердити вручну", "callback_data": f"cpay_{tg_user_id}"},
                ]]}
            )
        return jsonify({"status": "api_error"})

    if tx_status == "wrong_amount":
        conn.close()
        for admin_id in get_all_admin_ids():
            tg_send(admin_id,
                f"⚠️ <b>TON оплата — неправильна сума</b>\n\n"
                f"Юзер: <code>{tg_user_id}</code>\n"
                f"Memo: <code>{order['memo']}</code>\n"
                f"Очікувалось: {order['amount_usdt']} USDT\n\n"
                f"Транзакція знайдена але сума менша. Перевір:",
                {"inline_keyboard": [[
                    {"text": "✅ Підтвердити", "callback_data": f"cpay_{tg_user_id}"},
                    {"text": "❌ Відхилити",   "callback_data": f"decl_{tg_user_id}"},
                ]]}
            )
        return jsonify({"status": "wrong_amount"})

    if tx_status == "not_found":
        conn.close()
        return jsonify({"status": "not_found"})

    # Mark as paid
    verified_at = datetime.now().isoformat()
    conn.execute(
        "UPDATE orders SET status='paid', tx_hash=?, verified_at=? WHERE id=?",
        (tx_hash, verified_at, order_id)
    )
    conn.commit()
    conn.close()

    # Send access link via Telegram bot
    access_link = get_cfg("ton_access_link")
    if access_link and tg_user_id:
        tg_send(tg_user_id,
            "✅ <b>Оплату підтверджено!</b>\n\n"
            "Ось твоє посилання для доступу до системи 👇\n"
            f"{access_link}"
        )

    return jsonify({"status": "paid"})


@app.route("/api/payment/pending", methods=["GET"])
def pending_order():
    tg_user_id = request.args.get("tg_user_id", "")
    if not tg_user_id:
        return jsonify({"order": None})
    conn    = get_db()
    now_str = datetime.now().isoformat()
    order   = conn.execute(
        "SELECT * FROM orders WHERE tg_user_id=? AND status='pending' AND expires_at>? "
        "ORDER BY created_at DESC LIMIT 1",
        (tg_user_id, now_str)
    ).fetchone()
    conn.close()
    if not order:
        return jsonify({"order": None})
    wallet = get_cfg("ton_wallet")
    return jsonify({"order": {
        "order_id":       order["id"],
        "wallet_address": wallet,
        "amount_usdt":    order["amount_usdt"],
        "memo":           order["memo"],
        "expires_at":     order["expires_at"],
    }})


@app.route("/api/payment/status", methods=["GET"])
def payment_status():
    uid = request.args.get("uid", "").strip()
    if not uid:
        return jsonify({"paid": False})
    conn  = get_db()
    order = conn.execute(
        "SELECT id FROM orders WHERE tg_user_id=? AND status='paid'", (uid,)
    ).fetchone()
    conn.close()
    if order:
        access_link = get_cfg("ton_access_link") or get_cfg("links_channel")
        return jsonify({"paid": True, "access_link": access_link})
    return jsonify({"paid": False})


if __name__ == "__main__":
    init_db()
    threading.Thread(target=poll_bot, daemon=True).start()
    app.run(host="127.0.0.1", port=5050, debug=False)

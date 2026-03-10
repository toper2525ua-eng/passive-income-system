#!/usr/bin/env python3
"""
Passive Income System — Stats API + Telegram Bot
Runs on 127.0.0.1:5050, proxied via nginx /api/
"""
from flask import Flask, jsonify, request
from flask_cors import CORS
from datetime import datetime, date
import sqlite3
import os
import threading
import time
import requests as req

BOT_TOKEN = "8424430883:AAH6hMh8qqrgN3sRe-1QOfYOJ0xDs4dKuLU"
SITE_URL  = "https://passiveincomesystem.website"
TG_API    = f"https://api.telegram.org/bot{BOT_TOKEN}"


def tg_send(chat_id, text, reply_markup=None):
    payload = {"chat_id": chat_id, "text": text, "parse_mode": "HTML"}
    if reply_markup:
        payload["reply_markup"] = reply_markup
    try:
        req.post(f"{TG_API}/sendMessage", json=payload, timeout=10)
    except Exception:
        pass


def handle_start(chat_id, first_name):
    name = first_name or "друже"
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


def poll_bot():
    offset = 0
    while True:
        try:
            resp = req.get(
                f"{TG_API}/getUpdates",
                params={"offset": offset, "timeout": 30},
                timeout=35,
            )
            updates = resp.json().get("result", [])
            for u in updates:
                offset = u["update_id"] + 1
                msg     = u.get("message", {})
                text    = msg.get("text", "")
                chat_id = msg.get("chat", {}).get("id")
                first   = msg.get("from", {}).get("first_name", "")
                if text.startswith("/start") and chat_id:
                    handle_start(chat_id, first)
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
    conn.commit()
    conn.close()


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


@app.route("/api/stats", methods=["GET"])
def stats():
    if request.args.get("key") != ADMIN_KEY:
        return jsonify({"error": "unauthorized"}), 401

    conn  = get_db()
    today = date.today().isoformat()

    total = conn.execute(
        "SELECT COUNT(*) AS c FROM visits WHERE event='view' AND screen='home'"
    ).fetchone()["c"]

    today_count = conn.execute(
        "SELECT COUNT(*) AS c FROM visits WHERE ts LIKE ? AND event='view' AND screen='home'",
        (f"{today}%",),
    ).fetchone()["c"]

    screens = conn.execute(
        """
        SELECT screen, COUNT(*) AS c
        FROM visits
        WHERE ts LIKE ? AND event = 'view'
        GROUP BY screen
        ORDER BY c DESC
        LIMIT 10
        """,
        (f"{today}%",),
    ).fetchall()

    conn.close()
    return jsonify({
        "total":   total,
        "today":   today_count,
        "screens": [{"screen": r["screen"], "count": r["c"]} for r in screens],
    })


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
    try:
        conn.execute("INSERT INTO admins (entry) VALUES (?)", (entry,))
        conn.commit()
    except sqlite3.IntegrityError:
        pass
    conn.close()
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


if __name__ == "__main__":
    init_db()
    threading.Thread(target=poll_bot, daemon=True).start()
    app.run(host="127.0.0.1", port=5050, debug=False)

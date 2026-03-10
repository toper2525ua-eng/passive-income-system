#!/usr/bin/env python3
"""
Passive Income System — Stats API
Runs on 127.0.0.1:5050, proxied via nginx /api/
"""
from flask import Flask, jsonify, request
from flask_cors import CORS
from datetime import datetime, date
import sqlite3
import os

app = Flask(__name__)
CORS(app, origins=[
    "https://passiveincomesystem.website",
    "https://www.passiveincomesystem.website",
    "http://localhost",
    "http://127.0.0.1",
])

DB_PATH   = os.path.join(os.path.dirname(__file__), "stats.db")
ADMIN_KEY = "pisystem_admin_2026"


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


if __name__ == "__main__":
    init_db()
    app.run(host="127.0.0.1", port=5050, debug=False)

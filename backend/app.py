from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3
from utils.email_sender import send_email

app = Flask(__name__)
CORS(app)

# Database setup
def init_db():
    conn = sqlite3.connect('physio.db')
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS enquiries (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT,
                    email TEXT,
                    phone TEXT,
                    message TEXT
                )''')
    c.execute('''CREATE TABLE IF NOT EXISTS bookings (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT,
                    email TEXT,
                    phone TEXT,
                    address TEXT,
                    location TEXT,
                    issue TEXT,
                    treatment TEXT,
                    date TEXT,
                    time TEXT
                )''')
    conn.commit()
    conn.close()

init_db()

@app.route('/api/enquiry', methods=['POST'])
def enquiry():
    data = request.get_json()
    try:
        conn = sqlite3.connect('physio.db')
        c = conn.cursor()
        c.execute("INSERT INTO enquiries (name, email, phone, message) VALUES (?, ?, ?, ?)", 
                  (data['name'], data['email'], data['phone'], data['message']))
        conn.commit()
        conn.close()

        send_email(data, type='enquiry')  # 👈 sends email to doctor + user

        return jsonify({"success": True, "message": "Enquiry submitted successfully."})
    except Exception as e:
        return jsonify({"success": False, "message": str(e)}), 500

@app.route('/api/booking', methods=['POST'])
def booking():
    data = request.get_json()
    try:
        conn = sqlite3.connect('physio.db')
        c = conn.cursor()
        c.execute('''INSERT INTO bookings (name, email, phone, address, location, issue, treatment, date, time) 
                     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)''',
                  (data['name'], data['email'], data['phone'], data['address'], data['location'], 
                   data['issue'], data['treatment'], data['date'], data['time']))
        conn.commit()
        conn.close()

        send_email(data, type='booking')  # 👈 sends email to doctor + user

        return jsonify({"success": True, "message": "Booking submitted successfully."})
    except Exception as e:
        return jsonify({"success": False, "message": str(e)}), 500

@app.route('/api/enquiries', methods=['GET'])
def get_enquiries():
    conn = sqlite3.connect('physio.db')
    conn.row_factory = sqlite3.Row  # so we can access by column name
    c = conn.cursor()
    c.execute("SELECT * FROM enquiries")
    rows = c.fetchall()
    conn.close()

    enquiries = [dict(row) for row in rows]  # convert rows to list of dicts
    return jsonify(enquiries)


@app.route('/api/bookings', methods=['GET'])
def get_bookings():
    conn = sqlite3.connect('physio.db')
    conn.row_factory = sqlite3.Row
    c = conn.cursor()
    c.execute("SELECT * FROM bookings")
    rows = c.fetchall()
    conn.close()

    bookings = [dict(row) for row in rows]
    return jsonify(bookings)


if __name__ == '__main__':
    app.run(debug=True)

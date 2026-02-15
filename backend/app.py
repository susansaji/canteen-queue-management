from flask import Flask, jsonify, request
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app, origins=["http://localhost:5173"])  # React Vite frontend


# --------------------------
# Function to Connect DB
# --------------------------
def get_db_connection():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="Susan2327@2005",
        database="canteen"
    )


# --------------------------
# API: Get Menu Items
# --------------------------
@app.route("/api/menu", methods=["GET"])
def get_menu():
    try:
        db = get_db_connection()
        cursor = db.cursor(dictionary=True)

        cursor.execute("SELECT id, name, price, available, image FROM menu")
        menu_items = cursor.fetchall()

        cursor.close()
        db.close()

        return jsonify(menu_items)

    except Exception as e:
        return jsonify({"error": str(e)}), 500


# --------------------------
# API: Place an Order
# --------------------------
@app.route("/api/orders", methods=["POST"])
def create_order():
    try:
        data = request.get_json()
        item_id = data.get("item_id")
        quantity = data.get("quantity")

        if item_id is None or quantity is None:
            return jsonify({"error": "item_id and quantity are required"}), 400

        db = get_db_connection()
        cursor = db.cursor(dictionary=True)

        cursor.execute("SELECT available, name FROM menu WHERE id = %s", (item_id,))
        item = cursor.fetchone()

        if not item:
            cursor.close()
            db.close()
            return jsonify({"error": "Menu item not found"}), 404

        if quantity > item["available"]:
            cursor.close()
            db.close()
            return jsonify({"error": f"Only {item['available']} {item['name']} available"}), 400

        cursor.execute(
            "INSERT INTO orders (item_id, quantity) VALUES (%s, %s)",
            (item_id, quantity)
        )

        cursor.execute(
            "UPDATE menu SET available = available - %s WHERE id = %s",
            (quantity, item_id)
        )

        db.commit()

        cursor.close()
        db.close()

        return jsonify({"message": f"Order placed for {quantity} x {item['name']}"}), 201

    except Exception as e:
        return jsonify({"error": str(e)}), 500


# --------------------------
# API: View All Orders
# --------------------------
@app.route("/api/orders", methods=["GET"])
def get_orders():
    try:
        db = get_db_connection()
        cursor = db.cursor(dictionary=True)

        cursor.execute("""
            SELECT o.id, o.quantity, m.name AS item_name, m.price
            FROM orders o
            JOIN menu m ON o.item_id = m.id
            ORDER BY o.id DESC
        """)

        orders = cursor.fetchall()

        cursor.close()
        db.close()

        return jsonify(orders)

    except Exception as e:
        return jsonify({"error": str(e)}), 500


# --------------------------
# API: Users
# --------------------------
@app.route("/api/users", methods=["GET"])
def get_users():
    try:
        db = get_db_connection()
        cursor = db.cursor(dictionary=True)

        cursor.execute("SELECT id, name, email FROM users")
        users = cursor.fetchall()

        cursor.close()
        db.close()

        return jsonify(users)

    except Exception as e:
        return jsonify({"error": str(e)}), 500


# --------------------------
# Run Flask App
# --------------------------
if __name__ == "__main__":
    app.run(port=5000, debug=True)


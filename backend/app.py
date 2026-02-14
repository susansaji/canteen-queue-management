from flask import Flask, jsonify, request
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)  # allow React frontend to access backend

# --------------------------
# Connect to MySQL Database
# --------------------------
db = mysql.connector.connect(
    host="localhost",
    user="root",                # <-- Replace with your MySQL username
    password="Susan2327@2005",  # <-- Your MySQL password
    database="canteen"          # <-- Your database name
)
cursor = db.cursor(dictionary=True)



# --------------------------
# API: Get Menu Items
# --------------------------
@app.route("/api/menu", methods=["GET"])
def get_menu():
    try:
        cursor.execute("SELECT id, name, price, available, image FROM menu")
        menu_items = cursor.fetchall()
        return jsonify(menu_items)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# --------------------------
# API: Place an Order
# --------------------------
@app.route("/api/orders", methods=["POST"])
def create_order():
    data = request.json
    item_id = data.get("item_id")
    quantity = data.get("quantity")

    # Validate input
    if item_id is None or quantity is None:
        return jsonify({"error": "item_id and quantity are required"}), 400

    try:
        # Check if menu item exists and enough quantity is available
        cursor.execute("SELECT available, name FROM menu WHERE id = %s", (item_id,))
        item = cursor.fetchone()
        if not item:
            return jsonify({"error": "Menu item not found"}), 404
        if quantity > item['available']:
            return jsonify({"error": f"Only {item['available']} {item['name']} available"}), 400

        # Insert order into orders table
        cursor.execute(
            "INSERT INTO orders (item_id, quantity) VALUES (%s, %s)",
            (item_id, quantity)
        )

        # Update available quantity in menu table
        cursor.execute(
            "UPDATE menu SET available = available - %s WHERE id = %s",
            (quantity, item_id)
        )

        db.commit()
        return jsonify({"message": f"Order placed for {quantity} x {item['name']}"}), 201
    except Exception as e:
        db.rollback()
        return jsonify({"error": str(e)}), 500

# --------------------------
# API: View All Orders
# --------------------------
@app.route("/api/orders", methods=["GET"])
def get_orders():
    try:
        cursor.execute("""
            SELECT o.id, o.quantity, m.name as item_name, m.price
            FROM orders o
            JOIN menu m ON o.item_id = m.id
            ORDER BY o.id DESC
        """)
        orders = cursor.fetchall()
        return jsonify(orders)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# --------------------------
# Optional: Users API
# --------------------------
@app.route("/api/users", methods=["GET"])
def get_users():
    try:
        cursor.execute("SELECT id, name, email FROM users")
        return jsonify(cursor.fetchall())
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# --------------------------
# Run the Flask App
# --------------------------
if __name__ == "__main__":
    app.run(debug=True)


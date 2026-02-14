import React, { useState, useEffect } from "react";
import BIRIYANI from "../assets/BIRIYANI.jpg";
import meals from "../assets/meals.jpg";
import CHICKENCURRY from "../assets/CHICKENCURRY.jpg";
import FISHFRY from "../assets/FISHFRY.jpg";
import DOSA from "../assets/DOSA.jpg";

function DashboardScreen() {
  const [menuItems, setMenuItems] = useState([]);
  const [quantity, setQuantity] = useState({});

  // Map local images for existing items (optional)
  const images = {
    "Biriyani": BIRIYANI,
    "Meals": meals,
    "DOSA": DOSA,
    "Chicken Curry": CHICKENCURRY,
    "fish fry": FISHFRY
  };

  // Fetch menu items from backend
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/menu`)
      .then(res => res.json())
      .then(data => setMenuItems(data))
      .catch(err => console.error("Error fetching menu:", err));
  }, []);

  // Place order function
  const placeOrder = (itemId) => {
    const qty = quantity[itemId] || 1; // default quantity 1
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ item_id: itemId, quantity: qty })
    })
      .then(res => res.json())
      .then(data => {
        if (data.error) alert(data.error);
        else alert(data.message);
      })
      .catch(err => console.error("Error placing order:", err));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", color: "white" }}>🍽️ Today’s Menu</h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        {menuItems.map((item) => (
          <div
            key={item.id}
            style={{
              width: "250px",
              border: "1px solid #ccc",
              borderRadius: "12px",
              overflow: "hidden",
              backgroundColor: "#fff",
              boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
            }}
          >
            {/* Food Image */}
            <img
              src={images[item.name] || BIRIYANI} // fallback image
              alt={item.name}
              style={{
                width: "100%",
                height: "160px",
                objectFit: "cover",
              }}
            />

            {/* Food Name */}
            <h3
              style={{
                margin: "0",
                padding: "10px",
                textAlign: "center",
                fontSize: "18px",
                fontWeight: "bold",
                backgroundColor: "#f2f2f2",
                color: "black",
              }}
            >
              {item.name}
            </h3>

            {/* Details */}
            <div style={{ padding: "12px" }}>
              <p style={{ margin: "5px 0", fontWeight: "bold" }}>
                Price: ₹{item.price}
              </p>

              <p
                style={{
                  margin: "5px 0",
                  color: "green",
                  fontWeight: "bold",
                }}
              >
                Available: {item.available}
              </p>

              <input
                type="number"
                min="1"
                value={quantity[item.id] || 1}
                onChange={(e) =>
                  setQuantity({ ...quantity, [item.id]: parseInt(e.target.value) })
                }
                style={{ width: "50px", marginRight: "10px" }}
              />
              <button
                onClick={() => placeOrder(item.id)}
                style={{
                  width: "150px",
                  padding: "10px",
                  border: "none",
                  borderRadius: "8px",
                  backgroundColor: "#007bff",
                  color: "white",
                  cursor: "pointer",
                  marginTop: "10px",
                  fontSize: "16px",
                }}
              >
                Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardScreen;

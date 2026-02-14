import React from "react";
import BIRIYANI from "../assets/BIRIYANI.jpg";
import MEAL from "../assets/MEAL.jpg";
import CHICKEN from "../assets/CHICKEN.jpg";
import FISHFRY from "../assets/FISHFRY.jpg";
import DOSA from "../assets/DOSA.jpg";

function DashboardScreen({ onOrder }) {
  const menuItems = [
    {
      name: "Biriyani",
      price: 110,
      available: 25,
      img: BIRIYANI,
    },
    {
      name: "Meals",
      price: 80,
      available: 30,
      img: MEAL,
    },
    {
      name: "DOSA",
      price: 80,
      available: 40,
      img: DOSA,
    },
    {
      name: "Chicken Curry",
      price: 140,
      available: 20,
      img: CHICKEN,
    },
    {
      name: "Fish Fry",
      price: 120,
      available: 15,
      img: FISHFRY,
    },
  ];

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
        {menuItems.map((item, index) => (
          <div
            key={index}
            style={{
              width: "250px",
              border: "1px solid #ccc",
              borderRadius: "12px",
              overflow: "hidden",
              backgroundColor: "#fff",
              boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
            }}
          >
            <img
              src={item.img}
              alt={item.name}
              style={{
                width: "100%",
                height: "160px",
                objectFit: "cover",
              }}
            />

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

            <div style={{ padding: "12px" }}>
              <p style={{ margin: "5px 0", fontWeight: "bold", color: "red" }}>
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

              <button
                onClick={() => onOrder(item)}
                style={{
                  width: "100%",
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

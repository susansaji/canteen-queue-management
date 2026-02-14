import React from "react";
import { AppScreen } from "../types";

function Navbar({ activeScreen, onNavigate }) {
  const buttonStyle = (screen) => ({
    padding: "10px 15px",
    margin: "5px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    backgroundColor: activeScreen === screen ? "#007bff" : "#ddd",
    color: activeScreen === screen ? "white" : "black",
    fontWeight: "bold",
  });

  return (
    <div style={{ background: "#f5f5f5", padding: "10px" }}>
      <button
        style={buttonStyle(AppScreen.DASHBOARD)}
        onClick={() => onNavigate(AppScreen.DASHBOARD)}
      >
        Dashboard
      </button>

      <button
        style={buttonStyle(AppScreen.BOOKING)}
        onClick={() => onNavigate(AppScreen.BOOKING)}
      >
        Booking
      </button>
    </div>
  );
}

export default Navbar;

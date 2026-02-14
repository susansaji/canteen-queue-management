import React from "react";
import { AppScreen } from "../types";

interface NavbarProps {
  activeScreen: AppScreen;
  onNavigate: (screen: AppScreen) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeScreen, onNavigate }) => {
  const buttonStyle = (screen: AppScreen) => ({
    padding: "10px 15px",
    margin: "5px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    backgroundColor: activeScreen === screen ? "#007bff" : "#ddd",
    color: activeScreen === screen ? "white" : "black",
  });

  return (
    <div style={{ background: "#f5f5f5", padding: "10px" }}>
      <button style={buttonStyle(AppScreen.DASHBOARD)} onClick={() => onNavigate(AppScreen.DASHBOARD)}>
        Dashboard
      </button>

      <button style={buttonStyle(AppScreen.MENU)} onClick={() => onNavigate(AppScreen.MENU)}>
        Menu
      </button>
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";

import Navbar from "./components/Navbar";

import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import DashboardScreen from "./screens/DashboardScreen";
import BookingScreen from "./screens/BOOKINGSCREEN";

import { AppScreen } from "./types";

function App() {
  const [activeScreen, setActiveScreen] = useState(AppScreen.LOGIN);
  const [selectedFood, setSelectedFood] = useState(null);

  const handleOrder = (foodItem) => {
    setSelectedFood(foodItem);
    setActiveScreen(AppScreen.BOOKING);
  };

  const renderScreen = () => {
    switch (activeScreen) {
      case AppScreen.LOGIN:
        return <LoginScreen onNavigate={setActiveScreen} />;

      case AppScreen.REGISTER:
        return <RegisterScreen onNavigate={setActiveScreen} />;

      case AppScreen.DASHBOARD:
        return <DashboardScreen onOrder={handleOrder} />;

      case AppScreen.BOOKING:
        return <BookingScreen selectedFood={selectedFood} />;

      default:
        return <LoginScreen onNavigate={setActiveScreen} />;
    }
  };

  return (
    <div style={{ background: "#222", minHeight: "100vh" }}>
      {activeScreen !== AppScreen.LOGIN &&
        activeScreen !== AppScreen.REGISTER && (
          <Navbar activeScreen={activeScreen} onNavigate={setActiveScreen} />
        )}

      {renderScreen()}
    </div>
  );
}

export default App;

import React, { useState } from "react";

import Navbar from "./components/Navbar";

import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import DashboardScreen from "./screens/DashboardScreen";
import BookingScreen from "./screens/BOOKINGSCREEN";
import SuccessScreen from "./screens/SuccessScreen";

import { AppScreen } from "./types";

import BIRIYANI from "./assets/BIRIYANI.jpg";
import MEAL from "./assets/MEAL.jpg";
import DOSA from "./assets/DOSA.jpg";
import CHICKEN from "./assets/CHICKEN.jpg";
import FISHFRY from "./assets/FISHFRY.jpg";

function App() {
  const [activeScreen, setActiveScreen] = useState(AppScreen.LOGIN);

  const [menuItems, setMenuItems] = useState([
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
      name: "Dosa",
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
  ]);

  const [selectedFood, setSelectedFood] = useState(null);
  const [bookingDetails, setBookingDetails] = useState(null);

  const handleOrder = (foodItem) => {
    setSelectedFood(foodItem);
    setActiveScreen(AppScreen.BOOKING);
  };

  const handleConfirmBooking = (details) => {
    const updatedMenu = menuItems.map((item) => {
      if (item.name === details.food.name) {
        return {
          ...item,
          available: item.available - details.quantity,
        };
      }
      return item;
    });

    setMenuItems(updatedMenu);

    const bookingCode = "CANTEEN-" + Math.floor(100000 + Math.random() * 900000);

    setBookingDetails({
      ...details,
      bookingCode: bookingCode,
    });

    setActiveScreen(AppScreen.SUCCESS);
  };

  const renderScreen = () => {
    switch (activeScreen) {
      case AppScreen.LOGIN:
        return <LoginScreen onNavigate={setActiveScreen} />;

      case AppScreen.REGISTER:
        return <RegisterScreen onNavigate={setActiveScreen} />;

      case AppScreen.DASHBOARD:
        return <DashboardScreen menuItems={menuItems} onOrder={handleOrder} />;

      case AppScreen.BOOKING:
        return (
          <BookingScreen
            selectedFood={selectedFood}
            onConfirmBooking={handleConfirmBooking}
          />
        );

      case AppScreen.SUCCESS:
        return (
          <SuccessScreen
            bookingDetails={bookingDetails}
            onBack={() => setActiveScreen(AppScreen.DASHBOARD)}
          />
        );

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

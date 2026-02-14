import { useState } from "react";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/Register";

function App() {
  const [screen, setScreen] = useState("LOGIN");

  const users = [
    { id: 1, email: "anu@gmail.com", password: "1234", name: "Anu" },
  ];

  const handleLoginSuccess = (user) => {
    alert("Login Successful! Welcome " + user.name);
    setScreen("HOME"); // later you can change this to DASHBOARD
  };

  return (
    <>
      {screen === "LOGIN" && (
        <LoginScreen
          users={users}
          onLoginSuccess={handleLoginSuccess}
          onRegister={() => setScreen("REGISTER")}
        />
      )}

      {screen === "REGISTER" && (
        <RegisterScreen onBackToLogin={() => setScreen("LOGIN")} />
      )}

      {screen === "HOME" && (
        <h2 style={{ textAlign: "center" }}>Welcome to Canteen App ✅</h2>
      )}
    </>
  );
}

export default App;

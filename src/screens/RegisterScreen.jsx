import React, { useState } from "react";
import { AppScreen } from "../types";

const RegisterScreen = ({ onNavigate }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    // pretend registration successful
    alert("Registration Successful!");
    onNavigate(AppScreen.LOGIN); // go back to login
  };

  return (
    <div>
      <h2>Register</h2>

      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleRegister}>Register</button>

      <p>
        Already have an account?{" "}
        <button onClick={() => onNavigate(AppScreen.LOGIN)}>Login</button>
      </p>
    </div>
  );
};

export default RegisterScreen;

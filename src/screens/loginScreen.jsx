import React, { useState } from "react";
import { AppScreen } from "../types";

function LoginScreen({ onNavigate }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "" || password === "") {
      alert("Please enter username and password!");
      return;
    }

    alert("Login Successful!");
    onNavigate(AppScreen.DASHBOARD);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right, #141e30, #243b55)",
      }}
    >
      <div
        style={{
          width: "400px",
          backgroundColor: "white",
          borderRadius: "15px",
          padding: "30px",
          boxShadow: "0px 8px 25px rgba(0,0,0,0.5)",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            marginBottom: "10px",
            fontSize: "26px",
            fontWeight: "bold",
            color: "#007bff",
          }}
        >
          Canteen Queue Manager
        </h1>

        <p
          style={{
            marginBottom: "25px",
            fontSize: "15px",
            fontWeight: "bold",
            color: "#555",
          }}
        >
          Login to place your food order 🍽️
        </p>

        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "10px",
            border: "1px solid #ccc",
            outline: "none",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            borderRadius: "10px",
            border: "1px solid #ccc",
            outline: "none",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            border: "none",
            background: "linear-gradient(to right, #007bff, #00c6ff)",
            color: "white",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
          }}
        >
          Login
        </button>

        <p style={{ marginTop: "20px", fontSize: "15px", fontWeight: "bold" }}>
          Don’t have an account?{" "}
          <span
            onClick={() => onNavigate(AppScreen.REGISTER)}
            style={{
              color: "#007bff",
              cursor: "pointer",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginScreen;

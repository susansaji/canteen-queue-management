import React, { useState } from "react";

const LoginScreen = ({ users, onLoginSuccess, onRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      alert("Invalid Email or Password!");
      return;
    }

    onLoginSuccess(user);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />

      <button
        onClick={handleLogin}
        style={{
          width: "100%",
          padding: "10px",
          background: "green",
          color: "white",
        }}
      >
        Login
      </button>

      <p style={{ marginTop: "10px" }}>
        New User?{" "}
        <span style={{ color: "blue", cursor: "pointer" }} onClick={onRegister}>
          Register Here
        </span>
      </p>
    </div>
  );
};

export default LoginScreen;

import { useState } from "react";

export default function RegisterScreen({ addUser, onBackToLogin }) {
  const [name, setName] = useState("");
  const [regNo, setRegNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (!name || !regNo || !email || !password) {
      alert("Please fill all fields!");
      return;
    }

    const newUser = {
      id: Date.now(),
      name,
      regNo,
      email,
      password,
    };

    addUser(newUser);
    alert("Registration Successful! Please Login.");
    onBackToLogin();
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Register</h2>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />

      <input
        placeholder="Register Number"
        value={regNo}
        onChange={(e) => setRegNo(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />

      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />

      <button
        onClick={handleRegister}
        style={{
          width: "100%",
          padding: "10px",
          background: "blue",
          color: "white",
        }}
      >
        Register
      </button>

      <button
        onClick={onBackToLogin}
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "10px",
        }}
      >
        Back to Login
      </button>
    </div>
  );
}

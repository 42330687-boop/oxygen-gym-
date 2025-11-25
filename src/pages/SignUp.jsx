// pages/SignUp.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/Auth.css";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    if (name && email && password) {
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Password:", password);

      alert(
        `Account Created: your name is ${name}, your email is ${email}, and your password is ${password}. Please go to login.`
      );

      
    } else {
      alert("Please fill in all fields!");
    }
  };

  return (
    <div className="auth-wrapper">
      <h1 className="auth-title">
        <span>Sign</span> Up
      </h1>

      <form className="auth-form" onSubmit={handleSignup}>
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter your name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Create a strong password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="auth-button">
          Create Account
        </button>

        <p className="switch-text">
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;

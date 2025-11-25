import React, { useState } from "react";
import "../assets/Auth.css";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      console.log("Email:", email);
      console.log("Payment Method:", paymentMethod);
      localStorage.setItem("paymentMethod", paymentMethod);

      navigate("/AllOffer"); 
    } else {
      alert("Please enter email and password!");
    }
  };

  return (
    <div className="auth-wrapper">
      <h1 className="auth-title">
        <span>Log</span> In
      </h1>

      <form className="auth-form" onSubmit={handleLogin}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label htmlFor="payment">Payment Method</label>
        <select
          id="payment"
          className="payment-select"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="cash">Cash</option>
          <option value="visa">Visa / MasterCard</option>
          <option value="paypal">PayPal</option>
          <option value="online">Online Payment</option>
        </select>

        <button type="submit" className="auth-button">Log In</button>

        <p className="switch-text">
          Don’t have an account? <Link to="/SignUp">Create one</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;

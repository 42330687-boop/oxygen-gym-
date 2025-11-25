import React, { useState } from "react";
import "../assets/AskPage.css";

function AskPage() {
  const [name, setName] = useState("");
  const [question, setQuestion] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);

    console.log("Name:", name);
    console.log("Question:", question);
  };

  return (
    <div className="ask-wrapper">
      <h1 className="ask-title">
        <span>Ask</span> a Question
      </h1>

      {!sent ? (
        <form className="ask-form" onSubmit={handleSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            placeholder="Enter your name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label>Your Question</label>
          <textarea
            placeholder="Write your question here..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />

          <button type="submit" className="ask-button">Send</button>
        </form>
      ) : (
        <div className="thanks-box">
          <h2>Thank You!</h2>
          <p>Your question has been submitted.</p>
        </div>
      )}
    </div>
  );
}

export default AskPage;

import { useState } from "react";
import "./Contact.css";

export default function FormWithMultipleState() {
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChangePseudo = (e) => {
    setPseudo(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!pseudo || !email || !message) {
      alert("Please fill all the inputs");
    } else {
      setIsSubmit(true);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">
          <p>Pseudo:</p>
          <input
            id="fullName"
            type="text"
            value={pseudo}
            onChange={handleChangePseudo}
          />
        </label>
        <label htmlFor="email">
          <p>Email:</p>
          <input
            id="email"
            type="email"
            value={email}
            onChange={handleChangeEmail}
          />
        </label>
        <label htmlFor="message">
          <p>Message:</p>
          <textarea
            id="message"
            value={message}
            onChange={handleChangeMessage}
          />
        </label>
        <button type="submit">Send Message</button>
      </form>
      {isSubmit && (
        <p>
          This is the message from {pseudo}: {message}
        </p>
      )}
    </>
  );
}

import { useState } from "react";
import "./Contact.css";
import Rating from "./Rating";
import Suggestion from "./Suggestion";

function Contact() {
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [errorPseudo, setErrorPseudo] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [rating, setRating] = useState(0);

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
    if (!pseudo) {
      setErrorPseudo(true);
    } else {
      setErrorPseudo(false);
    }
    if (!email) {
      setErrorEmail(true);
    } else {
      setErrorPseudo(false);
    }
    if (!message) {
      setErrorMessage(true);
    } else {
      setErrorPseudo(false);
    }
    if (pseudo && email && message) {
      setIsSubmit(true);
    }
  };

  return (
    <>
      <form className="containered min-h-auto" onSubmit={handleSubmit}>
        <div className="input-container2">
          <div className="input-content">
            <div className="input-dist">
              <div className="input-type">
                <label htmlFor="fullName">
                  <p className="mt-8">Pseudo:</p>
                  <input
                    className={errorPseudo ? "error" : ""}
                    id="fullName"
                    type="text"
                    value={pseudo}
                    onChange={handleChangePseudo}
                  />
                  {errorPseudo && <p className="size">Pseudo is required</p>}
                </label>
                <label htmlFor="email">
                  <p>Email:</p>
                  <input
                    className={errorEmail ? "error" : ""}
                    id="email"
                    type="email"
                    value={email}
                    onChange={handleChangeEmail}
                  />
                  {errorEmail && <p className="size">Email is required</p>}
                </label>
                <label htmlFor="message">
                  <p>Message:</p>
                  <textarea
                    className={errorMessage ? "error" : ""}
                    id="message"
                    value={message}
                    onChange={handleChangeMessage}
                  />
                  {errorMessage && <p className="size">Message is required</p>}
                </label>
                <Rating rating={rating} setRating={setRating} />
                <button id="contactbutton" type="submit">
                  Send Message
                </button>

                {isSubmit && (
                  <p>
                    {pseudo} send a message : {message} and the {rating} Star(s)
                    for the game !
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </form>
      <Suggestion />
    </>
  );
}
export default Contact;

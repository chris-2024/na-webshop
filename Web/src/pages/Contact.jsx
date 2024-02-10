import React, { useState } from "react";
import sendEmail from "../services/emailService";
import "./Contact.css";

function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendEmailFunc = async () => {
    const templateParams = {
      to_email: "kelolor331@seosnaps.com",
      message: `Sender: ${email}\n\n${message}`,
    };

    try {
      await sendEmail(templateParams);
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      // Clear fields
      setEmail("");
      setMessage("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmailFunc();
  };

  return (
    <section className="content">
      <div className="contact-block contact-info">
        <img
          src="/contactpicture.jpg"
          alt="Contactpic"
          width="250"
          height="244"
        />
        <div className="contact-details">
          <h2>Kontakta oss</h2>
          <p className="bold-text">0771 225 225</p>
          <p className="bold-text">kontakt@nackatronik.se</p>
          <p>Vardagar: 08:30 - 19:00</p>
          <p>Helg: Stängt</p>
        </div>
      </div>
      <div className="contact-block">
        <h2>Skicka ett meddelande</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />

          <label htmlFor="message">Meddelande:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={handleMessageChange}
            required
          />

          <button type="submit">Skicka</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

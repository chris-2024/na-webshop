import React, { useState } from "react";
import emailjs from "emailjs-com";
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

  const sendEmail = async () => {
    const templateParams = {
      to_email: "kelolor331@seosnaps.com",
      message: `Sender's Email: ${email}\n\n${message}`,
    };

    const emailjsParams = {
      service_id: "service_w2janni",
      template_id: "template_3moaedq",
      user_id: "IuMpLpuJuSnF4d-8G",
    };

    try {
      await emailjs.send(
        emailjsParams.service_id,
        emailjsParams.template_id,
        templateParams,
        emailjsParams.user_id
      );
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
    sendEmail();
  };

  return (
    <section className="content">
      <div className="contact-block contact-info">
        <img
          src="public/contactpicture.jpg"
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

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import sendEmail from "../services/emailService";
import "./checkout.css";

const Checkout = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    postalCode: "",
    city: "",
    creditCard: "",
    expiryDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmailFunc = async () => {
    const templateParams = {
      to_email: formData.email,
      message: "Orderbekräftelse",
    };

    try {
      await sendEmail(templateParams);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmailFunc();
    navigate("/success");
  };

  return (
    <section className="content checkout-page">
      <h1>Kassa</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Namn:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">E-post:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="address">Adress:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <label htmlFor="postalCode">Postnummer:</label>
        <input
          type="text"
          id="postalCode"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleChange}
          required
        />

        <label htmlFor="city">Stad:</label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        />

        <label htmlFor="creditCard">Kreditkortnummer:</label>
        <input
          type="text"
          id="creditCard"
          name="creditCard"
          value={formData.creditCard}
          onChange={handleChange}
          pattern="[0-9]{16}"
          title="Kreditkortnummer 16-siffror"
          required
        />

        <div>
          <label htmlFor="expiryDate">Utgångsdatum:</label>
          <input
            type="text"
            id="expiryDate"
            name="expiryDate"
            placeholder="MM/ÅÅ"
            value={formData.expiryDate}
            onChange={handleChange}
            pattern="(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})"
            title="MM/ÅÅ"
            required
          />

          <label htmlFor="cvv" id="cvv">
            CVV:
          </label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            pattern="[0-9]{3}"
            title="CVV"
            required
          />
        </div>
        <input type="submit" className="btn" value="Slutför köp" />
      </form>
    </section>
  );
};

export default Checkout;

import React, { useState } from "react";
import "./checkout.css";

const Checkout = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
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
            required
          />
        </div>
        <input type="submit" className="btn" value="Slutför köp" />
      </form>
    </section>
  );
};

export default Checkout;

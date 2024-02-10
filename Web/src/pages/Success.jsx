import React from "react";
import { useCart } from "../context/CartContext.jsx";
import "./Success.css";

function Success() {
  const { state: cart } = useCart();

  return (
    <section className="content">
      <h1>Kvitto</h1>
      {cart.cartItems.length === 0 ? (
        <p>Ditt köp är tomt.</p>
      ) : (
        <>
          <div className="receipt-items">
            {cart.cartItems.map((product) => (
              <div key={product.id} className="receipt-item">
                <p className="receipt-item-title">{product.title}</p>
                <p>{product.quantity * product.price} SEK</p>
                <p>{product.quantity} st</p>
              </div>
            ))}
          </div>
          <div className="receipt-total">
            <p>Totalt belopp: {cart.totalCost} SEK</p>
          </div>
        </>
      )}
    </section>
  );
}

export default Success;

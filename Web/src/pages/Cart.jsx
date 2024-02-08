import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import CartItem from "../components/CartItem.jsx";
import "./Cart.css";

function Cart() {
  const { state } = useCart();

  return (
    <section className="content product-cart">
      <h2>Din Varukorg</h2>
      {state.cartItems.length === 0 ? (
        <p>Varukorgen är tom.</p>
      ) : (
        <div className="cart-items">
          {state.cartItems.map((product) => (
            <CartItem key={product.id} item={product} />
          ))}
        </div>
      )}
      <div className="cart-bottom">
      <NavLink
        className="buy-button"
        to="/checkout"
      >
        Slutför
      </NavLink>
      </div>
    </section>
  );
}

export default Cart;

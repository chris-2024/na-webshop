import { useCart } from "../context/CartContext.jsx";
import "../pages/Cart.css";

function CartItem({ item: cartProduct }) {
  const { removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  const imgSrc =
    import.meta.env.VITE_BASE_URL + cartProduct?.img?.data?.attributes?.url ||
    null;

  const formattedPrice = new Intl.NumberFormat("sv-SE", {
    style: "currency",
    currency: "SEK",
  }).format(cartProduct?.price);

  const totalFormattedPrice =
    cartProduct.quantity > 1
      ? new Intl.NumberFormat("sv-SE", {
          style: "currency",
          currency: "SEK",
        }).format(cartProduct?.price * cartProduct.quantity)
      : null;

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={imgSrc} alt={cartProduct.title} />
      </div>
      <div className="cart-item-details">
        <h4>{cartProduct.title}</h4>
        <p>
          Pris: {formattedPrice}{" "}
          {totalFormattedPrice && `(${totalFormattedPrice})`}
        </p>
        <p>Antal: {cartProduct.quantity}</p>
      </div>
      <div className="cart-item-actions">
        <button onClick={() => decreaseQuantity(cartProduct.id)}>-</button>
        <button onClick={() => increaseQuantity(cartProduct.id)}>+</button>
        <button onClick={() => removeFromCart(cartProduct.id)}>🗑️</button>
      </div>
    </div>
  );
}

export default CartItem;

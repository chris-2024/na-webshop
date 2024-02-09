import { NavLink } from "react-router-dom";
import slugify from "../utils/Slugify.js";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const slugTitle = slugify(product.title);

  const imgSrc =
    import.meta.env.VITE_BASE_URL + product.img?.data?.attributes?.url || null;

  const formattedPrice = new Intl.NumberFormat("sv-SE", {
    style: "currency",
    currency: "SEK",
  }).format(product.price);

  return (
    <NavLink
      className={"product-card"}
      to={`/product/${product.id}/${slugTitle}`}
    >
      <div className="card-container">
        <div className="image-container">
          <img src={imgSrc} alt="-" />
        </div>
        <h3>{product.title}</h3>
        <div className="price-container">
          <p className="quantity">{`Lager: ${product.quantity}`}</p>
          <p className="price">{formattedPrice}</p>
        </div>
      </div>
    </NavLink>
  );
};

export default ProductCard;

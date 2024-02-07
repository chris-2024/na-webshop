import { NavLink } from "react-router-dom";
import slugify from "../utils/Slugify.js";

const ProductCard = ({ product }) => {
  const slugTitle = slugify(product.title);
  return (
    <NavLink className={"box"} to={`/product/${product.id}/${slugTitle}`}>
      <div>
        <h3>{product.title}</h3>
        <p>{product.price}</p>
      </div>
    </NavLink>
  );
};

export default ProductCard;

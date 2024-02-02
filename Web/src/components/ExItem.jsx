import { NavLink } from "react-router-dom";
import "../pages/Example.css";

const ExItem = ({ product }) => {
  return (
    <NavLink className={"box"} to={`/expage/${product.id}`}>
      <div>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
      </div>
    </NavLink>
  );
};

export default ExItem;

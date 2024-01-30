import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-items">
      <ul>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
        <li>
          <NavLink to="/info">Info</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;

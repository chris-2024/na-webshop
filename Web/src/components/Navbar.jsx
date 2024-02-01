import { NavLink } from "react-router-dom";

function NavBar({ isVisible, closeNav }) {
  return (
    <ul
      className={`nav-items ${isVisible ? "show" : ""}`}
      onClick={(e) => e.stopPropagation()}
    >
      <li>
        <NavLink to="/products" onClick={closeNav}>
          Produkter
        </NavLink>
      </li>
      <li>
        <NavLink to="/info" onClick={closeNav}>
          Info
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" onClick={closeNav}>
          Kontakt
        </NavLink>
      </li>
      <li>
        <NavLink to="/example" onClick={closeNav}>
          Example
        </NavLink>
      </li>
    </ul>
  );
}

export default NavBar;

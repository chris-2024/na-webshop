import { NavLink } from "react-router-dom";
import NavBar from "./Navbar.jsx";

function Header() {
  return (
    <header>
      <nav className="topnav">
        <div className="menu-toggle">&#9776;</div>
        <div className="logo">
          <NavLink to="/" end>
            LOGO
          </NavLink>
        </div>
        <NavBar />
        <div className="cart-btn">
          <NavLink to="/cart">&#128722;</NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;

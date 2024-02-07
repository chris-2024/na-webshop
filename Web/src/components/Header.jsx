import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import NavBar from "./Navbar.jsx";

function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible((prev) => !prev);
  };

  const closeNav = () => {
    setIsNavVisible(false);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      const isMenuToggleClicked = e.target.classList.contains("menu-toggle");

      if (
        isNavVisible &&
        !isMenuToggleClicked &&
        !e.target.closest(".nav-items")
      ) {
        closeNav();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isNavVisible]);

  return (
    <header>
      <nav className="topnav">
        <div className="menu-toggle" onClick={toggleNav}>
          {isNavVisible ? "✕" : "☰"}
        </div>
        <div className="logo">
          <NavLink to="/" end>
            Nackatronik
          </NavLink>
        </div>
        <NavBar isVisible={isNavVisible} closeNav={closeNav} />
        <div className="cart-btn">
          <NavLink to="/cart">&#128722;</NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;

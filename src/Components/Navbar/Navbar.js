import "./Navbar.css";

import iconMenu from "../../assets/images/icon-menu.png";
import iconClose from "../../assets/images/icon-close.png";

import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="LandingNavbar">
      Logo
      <ul>
        <li>
          <NavLink to="/" activeClassName="active" exact>
            Home
          </NavLink>
        </li>
      </ul>

      <div className="menu">
        <img
          className="close-btn"
          alt="close menu"
          onClick={() => {
            document.getElementsByClassName("menu")[0].style.width = "0";
            setIsMenuOpen(false);
          }}
          src={iconClose}
        />
        <ul>
          <li>
            <NavLink to="/" activeClassName="active" exact>
              Home
            </NavLink>
          </li>
        </ul>
      </div>

      {!isMenuOpen && (
        <img
          alt="open menu"
          onClick={() => {
            document.getElementsByClassName("menu")[0].style.width = "70%";
            setIsMenuOpen(true);
          }}
          src={iconMenu}
          className="menu-btn"
        />
      )}
    </nav>
  );
};

export default Navbar;

import "./Navbar.css";

// import BrandLogo from "../BrandLogo";

// import googlePlayBadge from "../../../assets/images/google-play-badge.png";
import iconMenu from "../../assets/images/icon-menu.png";
import iconClose from "../../assets/images/icon-close.png";

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import parkingPointLogo from '../../assets/images/auxilium-logo-1.png';


const Navbar = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="LandingNavbar">
      {/* <BrandLogo /> */}
      {/* <div
        className='BrandLogo'
        onClick={() => {
            props.history.push('/');
        }}
        >
        <img src={parkingPointLogo} alt='brand logo' />
        <h2>
            <span>Auto</span>-Proctor
        </h2>
      </div> */}Logo
      <ul>
        <li>
          <NavLink to="/" activeClassName="active" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" activeClassName="active" exact>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/signup" activeClassName="active" exact>
            Signup
          </NavLink>
        </li>
      </ul>
      <Link className="playstore-badge" to="/playstore">
        {/* <img src={googlePlayBadge} /> */}
      </Link>

      <div className="menu">
        <img
          className="close-btn"
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
          <li>
            <NavLink to="/login" activeClassName="active" exact>
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/signup" activeClassName="active" exact>
              Signup
            </NavLink>
          </li>
          <li>
            <Link to="/playstore">
              {/* <img src={googlePlayBadge} /> */}
              GP
            </Link>
          </li>
        </ul>
      </div>

      {!isMenuOpen && (
        <img
          onClick={() => {
            document.getElementsByClassName("menu")[0].style.width = "70%";
            setIsMenuOpen(true);
          }}
          src={iconMenu}
          className="menu-btn"
        ></img>
      )}
    </nav>
  );
};

export default Navbar;
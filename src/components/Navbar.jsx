import React, { useState } from "react";
import logo from "../images/snap-news-logo2.png";
import { Link } from "react-router-dom";

const Navbar = ({ location }) => {
  const [nav, setNav] = useState(false);
  const [clickNav, setClickNav] = useState(0);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }

    // if (window.scrollY >= 200) {
    //   setClickNav(1);
    // } else if (window.scrollY >= 300) {
    //   setClickNav(2);
    // } else {
    //   setClickNav(0);
    // }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <nav className={nav ? `nav active` : `nav`}>
      <Link to="/#" className="logo" onClick={() => setClickNav(0)}>
        <img src={logo} alt="" />
      </Link>
      <input type="checkbox" className="menu-btn" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <Link
            to="/#"
            className={clickNav === 0 ? `active` : ``}
            onClick={() => {
              setClickNav(0);
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/#features"
            className={clickNav === 1 ? `active` : ``}
            onClick={() => setClickNav(1)}
          >
            Features
          </Link>
        </li>
        <li>
          <a
            href="/#about"
            className={clickNav === 2 ? `active` : ``}
            onClick={() => setClickNav(2)}
          >
            About
          </a>
        </li>
        <li>
          <Link
            to="/start"
            className={clickNav === 3 ? `active` : ``}
            onClick={() => setClickNav(3)}
          >
            Get Started
          </Link>
        </li>
        {/* <li>
          <a href="/">Download</a>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const [isHome, setIsHome] = useState(null);

  useEffect(() => {
    pathname.slice(1) === "" ? setIsHome(true) : setIsHome(false);
    isHome
      ? document.body.classList.remove("second-body")
      : document.body.classList.add("second-body");
  }, [pathname, isHome]);

  const handleClick = () => {
    //toggle
    setIsHome((e) => !e);
  };

  return (
    <div className="header">
      <ul className="nav-list">
        <li>
          <Link onClick={handleClick} className="nav-link" to="/about-me">
            About me
          </Link>
        </li>
        <li>
          <Link onClick={handleClick} className="nav-link" to="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link onClick={handleClick} id="home" className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={handleClick} className="nav-link" to="/knowledge">
            Knowledge
          </Link>
        </li>
        <li>
          <Link onClick={handleClick} className="nav-link" to="/contact-me">
            Contact me
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

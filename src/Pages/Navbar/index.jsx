import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./style.css";
function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };
  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);
  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div>
        <Link
          to="heroSection"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <h1 className="navbar--h1">Krypto</h1>
        </Link>
      </div>
      <a
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="howtotrade"
              className="navbar--content"
              style={{ fontFamily: '"Rubik", sans-serif', fontSize: "16px" }}
            >
              HOW IT WORKS
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="tradeplace"
              className="navbar--content"
              style={{ fontFamily: '"Rubik", sans-serif', fontSize: "16px" }}
            >
              CRYPTOS
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="features"
              className="navbar--content"
              style={{ fontFamily: '"Rubik", sans-serif', fontSize: "16px" }}
            >
              FEATURES
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="testimonial"
              className="navbar--content"
              style={{ fontFamily: '"Rubik", sans-serif', fontSize: "16px" }}
            >
              TESTIMONIAL
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="marketanalysis"
              className="navbar--content"
              style={{ fontFamily: '"Rubik", sans-serif', fontSize: "16px" }}
            >
              UNIVERSITY
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

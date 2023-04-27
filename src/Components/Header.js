import React, { useEffect } from "react";

const Header = () => {
  const linkAction = (e) => {
    e.preventDefault();
    window.location.href = e.target.href;
    const navMenu = document.getElementById("nav-menu");
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove("show-menu");
  };

  useEffect(() => {
    const toggleId = "nav-toggle";
    const navId = "nav-menu";
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId);

    const showMenu = () => {
      nav.classList.toggle("show-menu");
    };

    // Validate that variables exist
    if (toggle && nav) {
      toggle.addEventListener("click", showMenu);
    }

    return () => {
      toggle.removeEventListener("click", showMenu);
    };
  });

  return (
    <>
      <header className="header" id="header">
        <nav className="nav container">
          <a href="#/" className="nav__logo">
            Scanno
          </a>

          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a
                  href="#home"
                  className="nav__link active-link"
                  onClick={linkAction}
                >
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#services" className="nav__link" onClick={linkAction}>
                  Features
                </a>
              </li>
              <li className="nav__item">
                <a href="#download" className="nav__link" onClick={linkAction}>
                  Download
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link" onClick={linkAction}>
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div className="nav__toggle" id="nav-toggle">
            <i className="bx bx-grid-alt"></i>
          </div>

          <a href="#/" className="button button__header">
            Scan Now!
          </a>
        </nav>
      </header>
    </>
  );
};

export default Header;

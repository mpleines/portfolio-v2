import React, {useState, useEffect} from 'react';
import './navbar.css'

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [openHamburgerMenu, setOpenHamburgerMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleScroll = () => {
    if(window.scrollY > 0) {
        setHasScrolled(true);
    } else {
        setHasScrolled(false);
    }
  };

  useEffect(() => document.addEventListener('scroll', handleScroll));

  const handleWindowResize = () => {
    setIsMobile(window.innerWidth < 480);
  }

  useEffect(() => window.addEventListener('resize', handleWindowResize));
  // initially we also have to check the size of display
  useEffect(() => handleWindowResize(), []);

  const toggleHamburgerMenu = () => {
    setOpenHamburgerMenu(!openHamburgerMenu);
  }

  return (
    <nav className="navbar" style={hasScrolled ? {boxShadow: '0 2px 4px 0 rgb(51,51,51, 0.2)'} : null}>
        <div className="navbar-content" >
            <a href="https://maikpleines.com" className="link-no-style">
                <h3 className="navbar-title">Maik Pleines</h3>
            </a>
            {isMobile ? (
            <div>
              <div className={'hamburger-menu ' + (openHamburgerMenu ? 'hamburger-menu-open': '')} onClick={toggleHamburgerMenu}>
                <div className="line line1"></div>
                <div className="line line2"></div>
                <div className="line line3"></div>
              </div>
              {openHamburgerMenu ? <div className="menu-modal"></div> : null}
            </div>
            ) : (
            <div className="navbar-links">
              <a href="asdas" className="link link-no-style link-grey">About</a>
              <a href="asdasd" className="link link-no-style link-grey">Projects</a>
              <a href="asdasd" className="link link-no-style link-grey">Contact</a>
            </div>
            )}
        </div>
    </nav>
  );
}

export default Navbar;

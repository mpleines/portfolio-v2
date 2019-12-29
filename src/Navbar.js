import React, {useState, useEffect} from 'react';
import './navbar.css'

const Navbar = (props) => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const {showModal, toggleModal} = props;

  const handleScroll = () => {
    if(window.scrollY > 0) {
        setHasScrolled(true);
    } else {
        setHasScrolled(false);
    }
  };

  useEffect(() => document.addEventListener('scroll', handleScroll), []);

  const handleWindowResize = () => {
    setIsMobile(window.innerWidth < 480);
  }

  useEffect(() => window.addEventListener('resize', handleWindowResize));
  // initially we also have to check the size of display
  useEffect(() => handleWindowResize(), []);

  return (
    <nav className="navbar" style={hasScrolled ? {boxShadow: '0 2px 4px 0 rgb(51,51,51, 0.2)'} : null}>
        <div className="navbar-content">
            <a href="https://maikpleines.com" className="link-no-style">
                <h3 className="navbar-title">Maik Pleines</h3>
            </a>
            {isMobile ? (
              <div className="hamburger-menu" onClick={toggleModal}>
                <div className="line line1" style={showModal ? {transform: 'rotate(45deg) translate(1px, 3px)'} : null}></div>
                <div className="line line2" style={showModal ? {opacity: 0}: null}></div>
                <div className="line line3" style={showModal ? {transform: 'rotate(-45deg) translate(8px, -8px)', margin: 0} : null}></div>
              </div>
            ) : (
            <div className="navbar-links">
              <a href="#about" className="link-no-style navbar-link">About</a>
              <a href="#projects" className="link-no-style navbar-link">Projects</a>
              <a href="#contact" className="link-no-style navbar-link">Contact</a>
            </div>
            )}
        </div>
    </nav>
  );
}

export default Navbar;

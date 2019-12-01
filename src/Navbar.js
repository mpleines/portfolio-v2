import React, {useState, useEffect} from 'react';
import './navbar.css'

const AboutMe = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = () => {
    if(window.scrollY > 0) {
        setHasScrolled(true);
    } else {
        setHasScrolled(false);
    }
  };

  useEffect(() => document.addEventListener('scroll', handleScroll));

  return (
    <nav className="navbar" style={hasScrolled ? {boxShadow: '0 2px 4px 0 rgb(51,51,51, 0.2)'} : null}>
        <div className="navbar-content" >
            <a href="https://maikpleines.com" className="link-no-style">
                <h3 className="navbar-title">Maik Pleines</h3>
            </a>
            <div className="navbar-links">
                <a href="asdas" className="link link-no-style link-grey">About</a>
                <a href="asdasd" className="link link-no-style link-grey">Projects</a>
                <a href="asdasd" className="link link-no-style link-grey">Contact</a>
            </div>
        </div>
    </nav>
  );
}

export default AboutMe;

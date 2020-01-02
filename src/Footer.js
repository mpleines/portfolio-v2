import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div class="footer-wrapper">
      <div class="footer-segment">
          <h4>What is this?</h4>
          <p className="footer-paragraph">
            Welcome to my personal Website/Portfolio!
            I´m Maik, a Web Developer from Germany with a strong love for everything related to JavaScript. I created this website
            to showcase my projects.
          </p>
        </div>
        <div class="footer-segment">
          <h4>Social Links</h4>
          <p>
            <a href="https://github.com/mpleines" className="link social-link">github.com/mpleines</a>
            <a href="https://twitter.com/maikcodes" className="link social-link">twitter.com/maikcodes</a>
            <a href="https://dev.to/maikcodes" className="link social-link">dev.to/maikcodes</a>
          </p>
        </div>
      </div>
      
      <p class="footer-created">
        © Created with 
          <span role="img" aria-label="coffee emoji">☕</span> by Maik Pleines 2019
      </p>
    </footer>
  );
}

export default Footer;

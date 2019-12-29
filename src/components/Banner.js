import React from 'react';
import './Banner.css';

import attention from '../assets/attention.svg';

const Banner = () => {
  return (
    <blockquote className="banner-wrapper">
        <img src={attention} alt="exclamation mark" className="banner-icon"/>
        <p className="banner-paragraph">
            Currently I am working on 
            <a href="https://wizardly-bose-04d5eb.netlify.com/" className="banner-link">Clonergram</a>
            and <a href="https://maikpleines.com" className="banner-link">this website</a>
        </p>
    </blockquote>
  );
}

export default Banner;

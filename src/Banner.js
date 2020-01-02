import React from 'react';
import './Banner.css';
import attention from './assets/attention.svg';

const Banner = () => {
  return (
    <blockquote className="banner-wrapper">
        <img src={attention} alt="exclamation mark" className="banner-icon"/>
        <p className="banner-paragraph">
            The source code to all of my projects can be found 
            <a href="https://github.com/mpleines" className="banner-link">here</a>
        </p>
    </blockquote>
  );
}

export default Banner;

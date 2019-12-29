import React from 'react';
import attention from '../assets/attention.svg';

const Banner = () => {

  const styles = {
    wrapper: {
        margin: '0 auto',
        marginTop: '1em',
        marginBottom: '1em',
        maxWidth: '550px',
        padding: '10px',
        borderRadius: '9px',
        backgroundColor: '#8333FF',
        display: 'flex',
        justifyContent: 'center',
    },
    paragraph: {
        textAlign: 'left'
    },
    link: {
        color: 'white',
        '&:hover': {
            textDecoration: 'underline'
        },
        '&:visited': {
            color: 'white'
        }
    },
    attention: {
        width: '2em',
        height: 'auto',
        marginRight: '15px',
        filter: 'invert(1)'
    }
  };

  return (
    <div style={styles.wrapper}>
        <img src={attention} alt="exclamation mark" style={styles.attention}/>
        <p style={styles.paragraph}>
            Currently I am working on <a href="https://wizardly-bose-04d5eb.netlify.com/" style={styles.link}>Clonergram</a> and <a href="https://maikpleines.com" style={styles.link}>this website</a>
        </p>
    </div>
  );
}

export default Banner;

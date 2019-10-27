import React from 'react';
import './Button.css';

const Button = props => {
    return(
        <button
            className="button"
            style={props.style}
            onClick={props.handler}
        >
            {props.buttonText}
        </button>
    )
};

export default Button;
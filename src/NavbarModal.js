import React from 'react';
import cursor from './assets/cursor.svg';
import rocket from './assets/start-up.svg';
import email from './assets/email.svg';

const MenuModal = (props) => {
  return (
    <div className="menu-modal">
        <ul className="link-wrapper">
            <li> 
                <a href="#about" className="modal-link" onClick={props.toggleModal}>
                    <img src={cursor} alt="rocket icon"/>
                    <span>About</span>
                </a>
            </li>
            <li>
                <a href="#projects" className="modal-link" onClick={props.toggleModal}>
                    <img src={rocket} alt="rocket icon"/>
                    <span>Projects</span>
                </a>
            </li>
            <li>
                <a href="#contact" className="modal-link" onClick={props.toggleModal}>
                    <img src={email} alt="rocket icon"/>    
                    <span>Contact</span>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default MenuModal;

import React from 'react';
import cursor from './assets/cursor.svg';
import rocket from './assets/start-up.svg';
import email from './assets/email.svg';

const MenuModal = (props) => {
  return (
    <div className="menu-modal">
        <div className="hamburger-menu-wrapper">
            <div className="hamburger-menu-open" onClick={props.toggleModal}>
                <div className="line line1"></div>
                <div className="line line2"></div>
                <div className="line line3"></div>
            </div>
        </div>

        <ul className="link-wrapper">
            <li> 
                <a href="asdas" className="modal-link">
                    <img src={cursor} alt="rocket icon"/>
                    <span>About</span>
                </a>
            </li>
            <li>
                <a href="asdasd" className="modal-link">
                    <img src={rocket} alt="rocket icon"/>
                    <span>Projects</span>
                </a>
            </li>
            <li>
                <a href="asdasd" className="modal-link">
                    <img src={email} alt="rocket icon"/>    
                    <span>Contact</span>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default MenuModal;

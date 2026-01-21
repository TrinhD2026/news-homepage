import React from 'react';
import menuCloseIcon from '../assets/images/icon-menu-close.svg';
import './ModalMenu.css';
import Menu from './Menu.jsx'

function ModalMenu({onClose}) {
    return (
        <div className="menu-container">
            <div className="menu-container-content">
                <button className="btn-close" onClick={() => onClose()}>
                    <img src={menuCloseIcon} alt="Close menu icon" />
                </button>
                <Menu onAnchorClick={onClose} />
            </div>
        </div>
    )
}

export default ModalMenu;
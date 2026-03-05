import React from 'react';
import menuCloseIcon from '../assets/images/icon-menu-close.svg';
import {useRef,useEffect} from 'react';
import './ModalMenu.css';
import Menu from './Menu.jsx'

function ModalMenu({isOpen,setIsOpen}) {

    const modalRef=useRef(null);
    useEffect(() => {
        console.log("tabbing1");
        if(!isOpen) {
            return;
        }

        console.log("tabbing2");
        const modalElement=modalRef.current;
        const focusableElements=modalElement.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );

        const firstElement=focusableElements[0];
        const lastElement=focusableElements[focusableElements.length-1];
        const handleTabKeyPress=(event) => {
            console.log("tabbing3");
            if(event.key==='Tab') {
                console.log("tabbing4");
                if(event.shiftKey&&document.activeElement===firstElement) {
                    console.log("tabbing5");
                    //if shift+tab, prevent focus goes backward out of the first element
                    event.preventDefault();
                    lastElement.focus();
                } else if(!event.shiftKey&&document.activeElement===lastElement) {
                    //if tab at the last element, prevent focus goes out of the last element
                    console.log("tabbing6");
                    event.preventDefault();
                    firstElement.focus();
                }
            }
        };

        modalElement.addEventListener('keydown',handleTabKeyPress);
        return () => {
            modalElement.removeEventListener("keydown",handleTabKeyPress);
        };

    },[isOpen,setIsOpen]);

    return isOpen && (
        <div className="menu-container" ref={modalRef} >
            <div className="menu-container-content">
                <button className="btn-close" onClick={() => setIsOpen(false)}>
                    <img src={menuCloseIcon} alt="Close menu icon" />
                </button>
                <Menu onAnchorClick={() => setIsOpen(false)} />
            </div>
        </div>
    )
}

export default ModalMenu;
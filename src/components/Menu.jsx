import React from 'react';
import './Menu.css';

function Menu({onAnchorClick}) {
    return (
        //todo: could not use tab properly with this setup.
        //<nav className="navbar">
        //    <ul>
        //        <li tabIndex="0">
        //            <a className="nav-item" href="#home" onClick={() => onAnchorClick()}>Home</a>
        //        </li>
        //        <li tabIndex="0">
        //            <a className="nav-item" href="#popular" onClick={() => onAnchorClick()}>Popular</a>
        //        </li>
        //        <li tabIndex="0">
        //            <a className="nav-item" href="#trending" onClick={() => onAnchorClick()}>Trending</a>
        //        </li>
        //        <li tabIndex="0">
        //            <a className="nav-item" href="#categories" onClick={() => onAnchorClick()}>Categories</a>
        //        </li>
        //    </ul>
        //</nav>
        <nav className="navbar">
            <a className="nav-item" href="#home" onClick={() => onAnchorClick()}>Home</a>
            <a className="nav-item" href="#popular" onClick={() => onAnchorClick()}>Popular</a>
            <a className="nav-item" href="#trending" onClick={() => onAnchorClick()}>Trending</a>
            <a className="nav-item" href="#categories" onClick={() => onAnchorClick()}>Categories</a>
        </nav>
    )
}

export default Menu;
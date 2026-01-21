import React from 'react';
import './Menu.css';

function Menu({onAnchorClick}) {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <a class="nav-item" href="#home" onClick={() => onAnchorClick()}>Home</a>
                </li>
                <li>
                    <a class="nav-item" href="#popular" onClick={() => onAnchorClick()}>Popular</a>
                </li>
                <li>
                    <a class="nav-item" href="#trending" onClick={() => onAnchorClick()}>Trending</a>
                </li>
                <li>
                    <a class="nav-item" href="#categories" onClick={() => onAnchorClick()}>Categories</a>
                </li>
            </ul>
        </nav>
    )
}

export default Menu;
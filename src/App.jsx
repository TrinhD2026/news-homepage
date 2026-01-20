import { useState } from 'react'
import reactLogo from './assets/react.svg'
import mainLogo from './assets/images/logo.svg';
import menuIcon from './assets/images/icon-menu.svg';
import menuCloseIcon from './assets/images/icon-menu-close.svg';
import webImageMobile from './assets/images/image-web-3-mobile.jpg';
import webImageDesktop from './assets/images/image-web-3-desktop.jpg'
import retroPCsImage from './assets/images/image-retro-pcs.jpg';
import topLaptopsImage from './assets/images/image-top-laptops.jpg';
import gamingGrowthImage from './assets/images/image-gaming-growth.jpg';
import './App.css'

function App() {
    const [count,setCount]=useState(0);

    return (
        <div className="main-container">
            <div className="header-container">
                <img class="logo" src={mainLogo} alt="main logo" />
                <button class="btn menu-btn">
                    <img className="icon menu-icon" src={menuIcon} alt="menu icon" />
                </button>
            </div>
            <nav className="navigation">
                <a class="anchor nav-item" href="#home">Home</a>
                <a class="anchor nav-item" href="#new">New</a>
                <a class="anchor nav-item" href="#popular">Popular</a>
                <a class="anchor nav-item" href="#trending">Trending</a>
                <a class="anchor nav-item" href="#categories">Categories</a>
            </nav>
            <div className="content-container">
                <picture>
                    <source srcset={webImageDesktop} media="(min-width: 48rem)" />
                    <img className="image image-web" src={webImageMobile} alt="web 3 image" />
                </picture>
                <div className="home-section">
                    <h1>The Bright Future of Web 3.0?</h1>
                    <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                    <button type="button" className="btn read-more-btn">Read More</button>
                </div>
                <div className="new-section">
                    <h2>New</h2>
                    <a className="anchor title-new" id="title-new-1" href="#" target="_blank">Hydrogen VS Electric Cars</a>
                    <label for="title-new-1">Will hydrogen-fueled cars ever catch up to EVs?</label>
                    <a className="anchor title-new" id="title-new-2" href="#" target="_blank">The Downsides of AI Artistry</a>
                    <label for="title-new-2">What are the possible adverse effects of on-demand AI image generation?</label>
                    <a className="anchor title-new" id="title-new-3" href="#" target="_blank">Is VC Funding Drying Up?</a>
                    <label for="title-new-3">Private funding by VC firms is down 50% YOY. We take a look at what that means.</label>
                </div>
                <div className="trending-section">
                    <div className="article-trending">
                        <img className="image trending-img" src={retroPCsImage} alt="retro pcs image" />
                        <div>
                            <h3>01</h3>
                            <a className="anchor trending" id="title-trending-1" href="#" target="_blank">Reviving Retro PCs</a>
                            <label for="title-trending-1">What happens when old PCs are given modern upgrades?</label>
                        </div>
                    </div>
                    <div className="article-trending">
                        <img className="image trending-img" src={topLaptopsImage} alt="retro pcs image" />
                        <div>
                            <h3>02</h3>
                            <a className="anchor trending" id="title-trending-2" href="#" target="_blank">Top 10 Laptops of 2022</a>
                            <label for="title-trending-2">Our best picks for various needs and budgets.</label>
                        </div>
                    </div>
                    <div className="article-trending">
                        <img className="image trending-img" src={gamingGrowthImage} alt="retro pcs image" />
                        <div>
                            <h3>03</h3>
                            <a className="anchor trending" id="title-trending-3" href="#" target="_blank">The Growth of Gaming</a>
                            <label for="title-trending-3">How the pandemic has sparked fresh opportunities.</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App

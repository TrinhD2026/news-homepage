import {useState, useEffect} from 'react';
import mainLogo from './assets/images/logo.svg';
import menuIcon from './assets/images/icon-menu.svg';
/*import menuCloseIcon from './assets/images/icon-menu-close.svg';*/
import webImageMobile from './assets/images/image-web-3-mobile.jpg';
import webImageDesktop from './assets/images/image-web-3-desktop.jpg'
import retroPCsImage from './assets/images/image-retro-pcs.jpg';
import topLaptopsImage from './assets/images/image-top-laptops.jpg';
import gamingGrowthImage from './assets/images/image-gaming-growth.jpg';
import './App.css';
import Menu from './components/Menu.jsx';
import ModalMenu from './components/ModalMenu.jsx';

//TODO: not sure where we should navigate once we click these anchor links, so for we just go to some empty/non-existing section
function App() {
    const [isMenuButtonVisible,setIsMenuButtonVisible]=useState(true);
    const [isNormalMenuVisible,setIsNormalMenuVisible]=useState(false);
    const [isModalMenuVisible,setIsModalMenuVisible]=useState(false);
    const handleClosingMenu=() => {
        setIsModalMenuVisible(false);
    }

    //TODO:Tdoan: is there any better way to check window being resized?
    useEffect(() => {
        const handleResize=() => {
            if(window.innerWidth>=860) {
                setIsMenuButtonVisible(false);
                setIsModalMenuVisible(false);

                setIsNormalMenuVisible(true);
            }
            else {
                setIsModalMenuVisible(false);
                setIsMenuButtonVisible(true);

                setIsNormalMenuVisible(false);
            }
        };

        window.addEventListener("resize",handleResize);
        handleResize();

        return () => window.removeEventListener("resize",handleResize);
    }, []);

    return (
        <div className="container">
            <div className="header-container">
                <img class="logo" src={mainLogo} alt="main logo" />
                {isNormalMenuVisible && <Menu />}
                {isMenuButtonVisible && <button class="btn menu-btn" onClick={() => setIsModalMenuVisible(true)}>
                    <img className="icon menu-icon" src={menuIcon} alt="menu icon" />
                </button>}

                {isModalMenuVisible && <ModalMenu onClose={handleClosingMenu} />}
            </div>

            <div className="content-container">
                <div className="main-content">
                    <picture>
                        <source srcset={webImageDesktop} media="(min-width: 860px)" />
                        <img className="image image-web" src={webImageMobile} alt="web 3 image" />
                    </picture>
                    <h1>The Bright Future of Web 3.0?</h1>
                    <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                    <button type="button" className="btn read-more-btn">READ MORE</button>
                </div>-
                <div className="new-content">
                    <h2>New</h2>
                    <a className="anchor title-new" id="title-new-1" href="#about">Hydrogen VS Electric Cars</a>
                    <p for="title-new-1">Will hydrogen-fueled cars ever catch up to EVs?</p>
                    <a className="anchor title-new" id="title-new-2" href="#about">The Downsides of AI Artistry</a>
                    <p for="title-new-2">What are the possible adverse effects of on-demand AI image generation?</p>
                    <a className="anchor title-new" id="title-new-3" href="#about">Is VC Funding Drying Up?</a>
                    <p for="title-new-3">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                </div>
                <div className="trending-content">
                    <div className="trending-article">
                        <img className="image trending-img" src={retroPCsImage} alt="retro pcs image" />
                        <div>
                            <h3>01</h3>
                            <a className="anchor trending" id="title-trending-1" href="#about">Reviving Retro PCs</a>
                            <p for="title-trending-1">What happens when old PCs are given modern upgrades?</p>
                        </div>
                    </div>
                    <div className="trending-article">
                        <img className="image trending-img" src={topLaptopsImage} alt="retro pcs image" />
                        <div>
                            <h3>02</h3>
                            <a className="anchor trending" id="title-trending-2" href="#about">Top 10 Laptops of 2022</a>
                            <p for="title-trending-2">Our best picks for various needs and budgets.</p>
                        </div>
                    </div>
                    <div className="trending-article">
                        <img className="image trending-img" src={gamingGrowthImage} alt="retro pcs image" />
                        <div>
                            <h3>03</h3>
                            <a className="anchor trending" id="title-trending-3" href="#about">The Growth of Gaming</a>
                            <p for="title-trending-3">How the pandemic has sparked fresh opportunities.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App

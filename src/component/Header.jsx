import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faSun, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <header>
                <div className="main">
                    <div className="headertop">
                        <div className="logo">
                            <img src="../public/images/logoo.png" alt="" />
                        </div>
                        <div className={`sideone ${isMenuOpen ? "active" : ""}`}>
                            <div className="menu">
                                <nav>
                                    <ul>
                                        <li><a to="/" activeclassName="active">Home</a></li>
                                        <li><a to="/">Features</a></li>
                                        <li><a to="/">Blogs</a></li>
                                        <li><a to="/">Docs</a></li>
                                        <li><a to="/">Pages</a></li>
                                        <li><a to="/">Support</a></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="extrabuttons">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                                <FontAwesomeIcon icon={faSun} />
                                <button className="btn1">Sign In</button>
                                <button className="btn2">Sign Up</button>
                            </div>
                        </div>
                        <div className="menu-toggle" onClick={toggleMenu}>
                            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
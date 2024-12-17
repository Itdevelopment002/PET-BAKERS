import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCaretDown, FaHamburger, FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';
import './Header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('home'); // Default active link is 'home'

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const handleNavLinkClick = (link) => {
        setActiveLink(link); // Set the active link
    };

    // Set the active link based on the current URL
    useEffect(() => {
        const currentPath = window.location.pathname;
        if (currentPath.includes('about-us')) {
            setActiveLink('about-us');
        } else if (currentPath.includes('shop')) {
            setActiveLink('shop');
        } else if (currentPath.includes('contact')) {
            setActiveLink('contact');
        } else if (currentPath.includes('faqs')) {
            setActiveLink('faqs');
        } else if (currentPath.includes('privacy-policy')) {
            setActiveLink('privacy-policy');
        } else {
            setActiveLink('home');
        }
    }, []);

    return (
        <header className="header-wrapper">
            <div className="container d-flex justify-content-between align-items-center">
                {/* Navbar toggle button for mobile */}
                <button
                    className="navbar-toggler"
                    type="button"
                    aria-controls="navbarNav"
                    aria-expanded={menuOpen ? 'true' : 'false'}
                    aria-label="Toggle navigation"
                    onClick={toggleMenu}
                >
                    <FaHamburger />
                </button>

                {/* Brand Logo */}
                <h1 className="header__heading mx-3">
                    <a href="/" className="header__heading-link link">
                        Pet Baker
                    </a>
                </h1>

                {/* Navbar links */}
                <nav className={`navbar-collapse navbar-nav ${menuOpen ? 'open' : ''}`} id="navbarNav">
                    <ul className="navbar-nav navbar-items d-flex mx-2 justify-content-center">
                        <li className="nav-item">
                            <a
                                href="/"
                                className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
                                onClick={() => handleNavLinkClick('home')}
                                aria-current="page"
                            >
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="/pages/about-us"
                                className={`nav-link ${activeLink === 'about-us' ? 'active' : ''}`}
                                onClick={() => handleNavLinkClick('about-us')}
                            >
                                About Us
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className={`nav-link ${activeLink === 'shop' ? 'active' : ''}`}
                                href="#."
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                onClick={() => handleNavLinkClick('shop')}
                            >
                                Shop <FaCaretDown />
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="/collections/cup-cakes">Cup Cakes</a></li>
                                <li><a className="dropdown-item" href="/collections/mini-cakes">Mini Cakes</a></li>
                                <li><a className="dropdown-item" href="/collections/cakes">Cakes</a></li>
                                <li><a className="dropdown-item" href="/collections/paw-snacks">Paw Snacks</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a
                                href="/pages/contact"
                                className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`}
                                onClick={() => handleNavLinkClick('contact')}
                            >
                                Contact
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="/pages/faqs"
                                className={`nav-link ${activeLink === 'faqs' ? 'active' : ''}`}
                                onClick={() => handleNavLinkClick('faqs')}
                            >
                                FAQ's
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="/policies/privacy-policy"
                                className={`nav-link ${activeLink === 'privacy-policy' ? 'active' : ''}`}
                                onClick={() => handleNavLinkClick('privacy-policy')}
                            >
                                Privacy Policies
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Icons */}
                <div className="header__icons d-flex">
                    <div className="header__search">
                        <button
                            className="header__icon"
                            data-bs-toggle="modal"
                            data-bs-target="#searchModal"
                            style={{ background: "none", border: "none", padding: 0 }}
                        >
                            <FaSearch />
                        </button>
                    </div>
                    <a
                        href="https://shopify.com/87244898615/account?locale=en&region_country=IN"
                        className="header__icon"
                        style={{ background: "none", textDecoration: "none" }}
                    >
                        <FaUser />
                    </a>
                    <a
                        href="/cart"
                        className="header__icon"
                        id="cart-icon-bubble"
                        style={{ background: "none", textDecoration: "none" }}
                    >
                        <FaShoppingCart />
                    </a>
                </div>
            </div>

            {/* Modal for Search */}
            <div className="modal fade" id="searchModal" tabIndex="-1" aria-labelledby="searchModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="searchModalLabel">Search</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form action="/search" method="get" role="search">
                                <input className="form-control" type="search" name="q" placeholder="Search" />
                                <button type="submit" className="btn btn-primary mt-3">Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

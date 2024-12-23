import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCaretDown, FaHamburger, FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';
import './Header.css';
import './SearchModal.css';

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
        <>
            <div className="custom-utility-bar custom-gradient">
                <div className="container">
                    {/* Carousel Section */}
                    <div id="announcementCarousel" className="carousel slide custom-carousel" data-bs-ride="carousel">
                        <div className="carousel-inner custom-carousel-inner">
                            {/* Slide 1 */}
                            <div className="carousel-item active custom-carousel-item">
                                <div className="custom-announcement-message text-center py-2">
                                    <a
                                        href="https://thefurrybaker.com/collections/paw-snacks"
                                        className="custom-announcement-link text-decoration-none text-dark d-inline-flex align-items-center"
                                    >
                                        <span className="me-2 custom-announcement-message">
                                            Buy 3 Gluten-free Cookies & Pay for only 2 - Order Now
                                        </span>
                                        <svg
                                            viewBox="0 0 14 10"
                                            fill="none"
                                            aria-hidden="true"
                                            className="custom-icon-arrow"
                                            xmlns="http://www.w3.org/2000/svg"
                                            style={{ width: "16px", height: "10px" }}
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            {/* Slide 2 */}
                            <div className="carousel-item custom-carousel-item">
                                <div className="custom-announcement-message text-center py-2">
                                    <p className="custom-announcement-message mb-0">
                                        Provide free delivery for orders above ₹1799 - Use Coupon{" "}
                                        <span className="text-primary">FURRYSHIP</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Previous Button */}
                        <button
                            className="custom-carousel-prev"
                            type="button"
                            data-bs-target="#announcementCarousel"
                            data-bs-slide="prev"
                        >
                            <span className="custom-carousel-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>

                        {/* Next Button */}
                        <button
                            className="custom-carousel-next"
                            type="button"
                            data-bs-target="#announcementCarousel"
                            data-bs-slide="next"
                        >
                            <span className="custom-carousel-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>


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

                    <h1 className="header__heading mx-2">
                        <a href="/" className="header__heading-link link">
                            Furry Frosting
                        </a>
                    </h1>

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
                                    href="/about-us"
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
                                    <li><a className="dropdown-item" href="/cup-cakes">Cup Cakes</a></li>
                                    <li><a className="dropdown-item" href="/mini-cakes">Mini Cakes</a></li>
                                    <li><a className="dropdown-item" href="/cakes">Cakes</a></li>
                                    <li><a className="dropdown-item" href="/paw-snacks">Paw Snacks</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="/contact"
                                    className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`}
                                    onClick={() => handleNavLinkClick('contact')}
                                >
                                    Contact
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="/faqs"
                                    className={`nav-link ${activeLink === 'faqs' ? 'active' : ''}`}
                                    onClick={() => handleNavLinkClick('faqs')}
                                >
                                    FAQ's
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="/privacy-policy"
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
                            href="/login"
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
                <div
                    className="modal fade"
                    id="searchModal"
                    tabIndex="-1"
                    aria-labelledby="searchModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content modal-css border-0">
                            <div className="modal-body p-0 mt-4">
                                <div className="d-flex justify-content-between align-items-center">
                                    <form
                                        action="/search"
                                        method="get"
                                        role="search"
                                        className="search-form flex-grow-1"
                                    >
                                        <div className="search-bar d-flex align-items-center">
                                            <input
                                                className="form-control search-input"
                                                type="search"
                                                name="q"
                                                placeholder="Search"
                                                aria-label="Search"
                                            />
                                            <button type="submit" className="search-btn">
                                                <i className="bi bi-search"></i>
                                            </button>
                                        </div>
                                    </form>

                                    <button
                                        type="button"
                                        className="close-btn"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    >
                                        <i className="bi bi-x"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </header>
        </>
    );
};

export default Header;

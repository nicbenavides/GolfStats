// frontend/src/components/Layout.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg'; // Ensure the path is correct

const Layout = ({ children }) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand d-flex align-items-center">
                        <img src={logo} alt="GolfStats Logo" height="40" className="me-2" />
                        Home
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <main className="container mt-4">
                {children}
            </main>
        </div>
    );
};

export default Layout;

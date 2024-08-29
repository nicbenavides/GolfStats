// frontend/src/components/Layout.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg'; // Ensure the path is correct
import Login from './Login';
import Register from './Register';

const Layout = ({ children }) => {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [username, setUsername] = useState(localStorage.getItem('username') || null);
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);

    const handleLogin = (user) => {
        setUsername(user);
        setShowLogin(false);
        setSuccessMessage('');
    };

    const handleLogout = () => {
        setUsername(null);
        localStorage.removeItem('username');
    };

    const handleRegisterSuccess = () => {
        setShowRegister(false);
        setSuccessMessage('User created successfully');
        setShowLogin(true);
    };

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
                {!username ? (
                    <>
                        <button onClick={() => setShowLogin(true)} className="btn btn-primary me-2">
                            Login
                        </button>
                        <button onClick={() => setShowRegister(true)} className="btn btn-secondary">
                            Create New User
                        </button>
                    </>
                ) : (
                    <div>
                        <span className="me-2">Welcome, {username}!</span>
                        <button onClick={handleLogout} className="btn btn-danger">Logout</button>
                    </div>
                )}

                {showLogin && (
                    <div className="modal show d-block" tabIndex="-1" role="dialog">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Login</h5>
                                    <button type="button" className="btn-close" onClick={() => setShowLogin(false)}></button>
                                </div>
                                <div className="modal-body">
                                    <Login onLogin={handleLogin} successMessage={successMessage} />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {showRegister && (
                    <div className="modal show d-block" tabIndex="-1" role="dialog">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Register</h5>
                                    <button type="button" className="btn-close" onClick={() => setShowRegister(false)}></button>
                                </div>
                                <div className="modal-body">
                                    <Register onRegisterSuccess={handleRegisterSuccess} />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
            <main className="container mt-4">
                {children}
            </main>
        </div>
    );
};

export default Layout;

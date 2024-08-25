// frontend/src/components/Home.js
import React, { useState, useEffect } from 'react';
import Login from './Login';
import Register from './Register';

const Home = () => {
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
            <h1 className="mb-4">Welcome to GolfStats!</h1>
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
        </div>
    );
};

export default Home;

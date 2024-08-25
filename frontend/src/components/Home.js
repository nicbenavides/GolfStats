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
        // Check if a user is already logged in when the component mounts
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
        localStorage.removeItem('username'); // Remove username from localStorage
    };

    const handleRegisterSuccess = () => {
        setShowRegister(false);
        setSuccessMessage('User created successfully');
        setShowLogin(true);
    };

    return (
        <div>
            <h1>Welcome to GolfStats!</h1>
            {!username ? (
                <>
                    <button onClick={() => setShowLogin(true)} style={styles.button}>
                        Login
                    </button>
                    <button onClick={() => setShowRegister(true)} style={styles.button}>
                        Create New User
                    </button>
                </>
            ) : (
                <div>
                    <span>Welcome, {username}!</span>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            )}

            {showLogin && (
                <div style={styles.modal}>
                    <Login onLogin={handleLogin} successMessage={successMessage} />
                    <button onClick={() => setShowLogin(false)} style={styles.closeButton}>Close</button>
                </div>
            )}

            {showRegister && (
                <div style={styles.modal}>
                    <Register onRegisterSuccess={handleRegisterSuccess} />
                    <button onClick={() => setShowRegister(false)} style={styles.closeButton}>Close</button>
                </div>
            )}
        </div>
    );
};

const styles = {
    button: {
        margin: '10px',
        padding: '10px',
        cursor: 'pointer',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
    },
    modal: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: '#fff',
        padding: '20px',
        border: '1px solid #ddd',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        zIndex: 1000,
    },
    closeButton: {
        marginTop: '10px',
        padding: '10px',
        cursor: 'pointer',
        backgroundColor: '#dc3545',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
    },
};

export default Home;

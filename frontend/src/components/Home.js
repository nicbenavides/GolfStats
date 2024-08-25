// frontend/src/components/Home.js
import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

const Home = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    return (
        <div className="home">
            <h1>Welcome to GolfStats!</h1>
            <button onClick={() => setShowLogin(true)} style={styles.button}>
                Login
            </button>
            <button onClick={() => setShowRegister(true)} style={styles.button}>
                Create New User
            </button>

            {showLogin && (
                <div style={styles.modal}>
                    <Login />
                    <button onClick={() => setShowLogin(false)}>Close</button>
                </div>
            )}

            {showRegister && (
                <div style={styles.modal}>
                    <Register />
                    <button onClick={() => setShowRegister(false)}>Close</button>
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
};

export default Home;

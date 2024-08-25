// frontend/src/components/Layout.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg'; // Adjust the path based on where you place the logo

const Layout = ({ children }) => {
    return (
        <div>
            <nav style={styles.navbar}>
                <Link to="/" style={styles.logoLink}>
                    <img src={logo} alt="GolfStats Logo" style={styles.logo} />
                    GolfStats
                </Link>
                <Link to="/about" style={styles.link}>About Us</Link>
                <Link to="/contact" style={styles.link}>Contact Us</Link>
                <div style={styles.authButtons}>
                    {/* Add any authentication-related buttons or links here */}
                </div>
            </nav>
            <main style={styles.mainContent}>
                {children}
            </main>
        </div>
    );
};

const styles = {
    navbar: {
        display: 'flex',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#333',
        color: '#fff',
    },
    logoLink: {
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        color: '#fff',
        marginRight: 'auto',
    },
    logo: {
        height: '40px', // Adjust size as needed
        marginRight: '10px',
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
        margin: '0 15px',
    },
    mainContent: {
        padding: '20px',
    },
    authButtons: {
        // Style for authentication-related buttons
    },
};

export default Layout;

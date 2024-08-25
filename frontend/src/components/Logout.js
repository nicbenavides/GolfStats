// frontend/src/components/Logout.js
import React from 'react';
import axios from 'axios';

const Logout = ({ onLogout }) => {
    const handleLogout = async () => {
        try {
            await axios.post('/auth/logout');
            onLogout(); // Notify parent component of successful logout
        } catch (error) {
            console.error('Logout failed:', error.response.data.message);
        }
    };

    return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;

import React, { useState } from 'react';

const Register = ({ onRegisterSuccess }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }),
        });

        if (response.ok) {
            onRegisterSuccess();
        } else {
            const data = await response.json();
            setError(data.error || 'Failed to register');
        }
    };

    return (
        <div>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="form-control mb-2"
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control mb-2"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control mb-2"
                />
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    );
};

export default Register;

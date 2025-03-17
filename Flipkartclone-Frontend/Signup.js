// Signup.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();

    const handleSignup = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        if (password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const emailExists = users.some(user => user.email === email);
        if (emailExists) {
            setError("Email already exists");
            return;
        }
        users.push({ name, email, password });
        localStorage.setItem('users', JSON.stringify(users));
        history.push('/login');
    };

    return (
        <div className="container">
            <h2>Sign Up</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSignup}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                </div>
                <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
            <p className="mt-3">Already have an account? <a href="/login">Login</a></p>
        </div>
    );
};

export default Signup;
import React, { useState } from 'react';
import './user.css'; // Import CSS file for component styling

function User() {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleToggle = () => {
        setIsLogin(!isLogin);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isLogin) {
            console.log('Logging in with email:', email, 'and password:', password);
        } else {
            console.log('Signing up with name:', name, 'email:', email, 'and password:', password);
        }
        setEmail('');
        setPassword('');
        setName('');
    };

    return (
        <div className="container">
            {/* <img src="/logo.png" alt="Logo" className="logo" /> */}
            <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
            <form onSubmit={handleSubmit}>
                {!isLogin && (
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                )}
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
            </form>
            <p>
                {isLogin ? "Don't have an account? " : "Already have an account? "}
                <span className="toggle-link" onClick={handleToggle}>
                    {isLogin ? 'Create Account' : 'Login'}
                </span>
            </p>
        </div>
    );
}

export default User;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleToggle = () => {
    setIsLogin(!isLogin);
    // Clear fields when toggling
    setEmail('');
    setPassword('');
    setName('');
  };

  const handleLogin = async () => {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (response.ok) {
      console.log('Login successful:', data.token);
      localStorage.setItem('token', data.token); // Save the token
      // Optionally redirect or update UI
    } else {
      console.error('Login failed:', data.message);
      alert(data.message); // Show error message to the user
    }
  };

  const handleSignup = async () => {
    const response = await fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();
    if (response.ok) {
      console.log('User registered successfully:', data);
      localStorage.setItem('token', data.token); // Save the token if you get it from login
      // Optionally redirect or update UI
    } else {
      console.error('Registration failed:', data.message);
      alert(data.message); // Show error message to the user
    }
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    handleLogin();
  };

  const handleSubmitSignup = (e) => {
    e.preventDefault();
    handleSignup();
  };

  return (
    <div className="container">
      <div className="form-container">
        <div className="form-toggle">
          <button onClick={handleToggle} className={isLogin ? 'active' : ''}>
            Login
          </button>
          <button onClick={handleToggle} className={!isLogin ? 'active' : ''}>
            Sign Up
          </button>
          <Link to="/" className="cta-button">Start Your Free Trial</Link>
        </div>

        {isLogin ? (
          <form className="form" onSubmit={handleSubmitLogin}>
            <h2>Login</h2>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
            <p className="switch-form">
              Don't have an account? <span onClick={handleToggle}>Sign Up</span>
            </p>
          </form>
        ) : (
          <form className="form" onSubmit={handleSubmitSignup}>
            <h2>Sign Up</h2>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Sign Up</button>
            <p className="switch-form">
              Already have an account? <span onClick={handleToggle}>Login</span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginPage;

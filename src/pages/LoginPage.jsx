import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from './Menu';
import '../assets/LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username && password) {
      document.cookie = `authToken=dummy-token;max-age=${60 * 30};path=/`; // 30분 유지
      navigate('/mypage');
    } else {
      alert('Username and password are required.');
    }
  };

  return (
    <div className="cover-screen">
      <Menu />
      <div className="login-page">
        <h1>🔐 Login Page</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <br />
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

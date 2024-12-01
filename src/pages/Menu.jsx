// src/pages/Menu.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = document.cookie
      .split('; ')
      .find(row => row.startsWith('authToken='))
      ?.split('=')[1];

    setIsLoggedIn(!!token); // 토큰 존재 여부로 로그인 상태 판단
  }, []);

  return (
    <div className="menu-bar">
      <Link to="/">Home</Link> | 
      <Link to="/products">Products</Link> | 
      {isLoggedIn ? (
        <Link to="/mypage">Mypage</Link>
      ) : (
        <Link to="/login">Login</Link>
      )} | 
      <Link to="/about">About Us</Link> | 
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default Menu;

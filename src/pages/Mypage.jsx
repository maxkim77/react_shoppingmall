import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from './Menu';

const Mypage = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = document.cookie
      .split('; ')
      .find(row => row.startsWith('authToken='))
      ?.split('=')[1];

    if (!token) {
      console.log('No token found. Redirecting to login.');
      navigate('/login');
      return;
    }

    // 토큰이 있는 경우 사용자 이름 설정 (더미 데이터 사용)
    setUsername('Dummy User');
  }, [navigate]);

  const handleLogout = () => {
    // 쿠키 삭제
    document.cookie = 'authToken=; Max-Age=0; path=/';
    // 로그인 페이지로 리디렉션
    navigate('/login');
  };

  return (
    <div>
      <Menu />
      <h1>Welcome to My Page, {username}</h1>
      <p>This is your personal page after login.</p>
      <button onClick={handleLogout}>Logout</button> {/* 로그아웃 버튼 */}
    </div>
  );
};

export default Mypage;

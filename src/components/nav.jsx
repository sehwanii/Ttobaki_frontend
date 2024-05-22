import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/nav.css'

const Nav = () => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="header-left">
        <div className="logo">
          <img src="./img/logo.png" alt="ttobaki logo" />
          <span>또박이</span>
        </div>
        <nav className="nav">
          <a onClick={() => navigate('/levels')}>난이도별 문제</a>
          <a onClick={() => navigate('/유형별')}>유형별 문제</a>
          <a onClick={() => navigate('/테스트')}>테스트</a>
          <a onClick={() => navigate('/랭킹')}>랭킹</a>
        </nav>
      </div>
      <div className="header-right">
        <button className="search-button">
          <span role="img" aria-label="search">🔍</span>
        </button>
        <div className="notification">
          <span role="img" aria-label="notification">🔔</span>
          <span className="notification-count">1</span>
        </div>
      </div>
    </div>
  );
};

export default Nav;
import React from 'react';
import '../styles/Header.css';
import universityLogo from '../assets/uni-logo.png'; // You can replace this with your logo path

function Header({ user }) {
  return (
    <header className="header">
      <div className="header-left">
        <img src={universityLogo} alt="University Logo" className="logo" />
        <h1 className="university-name">University of Jaffna</h1>
      </div>
      <div className="header-right">
        <div className="user-info">
          <span className="user-name">{user.name}</span> | <span className="user-role">{user.role}</span>
        </div>
        <button className="logout-btn" title="Logout">Logout</button>
      </div>
    </header>
  );
}

export default Header;

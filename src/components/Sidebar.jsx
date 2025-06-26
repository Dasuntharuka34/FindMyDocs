import React from 'react';
import '../styles/Sidebar.css';

function Sidebar() {
  return (
    <nav className="sidebar">
      <ul>
        <li className="sidebar-item active">Dashboard</li>
        <li className="sidebar-item">My Letters</li>
        <li className="sidebar-item">New Letter Request</li>
        <li className="sidebar-item">Notifications</li>
        <li className="sidebar-item">Profile</li>
      </ul>
    </nav>
  );
}

export default Sidebar;

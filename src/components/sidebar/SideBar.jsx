import React from 'react';
import './SideBar.scss';

const navItems = [
  { url: '/mentors', name: 'MENTORS' },
  { url: '/reservations', name: 'RESERVATIONS' },
  { url: '/bookings', name: 'BOOK' },
  { url: '/add', name: 'ADD MENTOR' },
];

const SideBar = () => (
  <div className="sidebar">
    <div className="sidebar-header">
      <h3>MentorMe</h3>
    </div>
    <div className="sidebar-nav">
      {navItems.map(item => (
        <a href={item.url} key={item.name}>
          {item.name}
        </a>
      ))}
    </div>
  </div>
);

export default SideBar;

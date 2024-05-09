import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  // NavLink에 스타일을 적용하는 함수
  const getActiveLinkClass = (isActive) => (isActive ? "active" : "");

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        UMC Movie
      </div>
      <div className="navbar-links">
        <NavLink to="/signup" className={({ isActive }) => getActiveLinkClass(isActive)}>회원가입</NavLink>
        <NavLink to="/popular" className={({ isActive }) => getActiveLinkClass(isActive)}>Popular</NavLink>
        <NavLink to="/now-playing" className={({ isActive }) => getActiveLinkClass(isActive)}>Now Playing</NavLink>
        <NavLink to="/top-rated" className={({ isActive }) => getActiveLinkClass(isActive)}>Top Rated</NavLink>
        <NavLink to="/upcoming" className={({ isActive }) => getActiveLinkClass(isActive)}>Upcoming</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

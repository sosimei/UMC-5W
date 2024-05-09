import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <nav>
      <NavLink to="/popular">Popular</NavLink>
      <NavLink to="/now-playing">Now Playing</NavLink>
      <NavLink to="/top-rated">Top Rated</NavLink>
      <NavLink to="/upcoming">Upcoming</NavLink>
    </nav>
  );
}

export default Footer;

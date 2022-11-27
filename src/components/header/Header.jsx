import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="menu">
      <ul className="menu__items">
        <li className="menu__item"><Link to='/'>Home</Link></li>
        <li className="menu__item"><Link to='/info'>Info</Link></li>
      </ul>
    </nav>
  );
};

export { Header };

import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

export const Header: FC = () => (
  <ul className="menu">
    <li><NavLink to="/" exact activeClassName="active-link">Home</NavLink></li>
    <li><NavLink to="/people" activeClassName="active-link">People</NavLink></li>
  </ul>
);

import React from 'react';
import { NavLink } from 'react-router-dom'
import style from './Nav.scss';

function Nav () {
  return (
    <ul className={style.nav}>
      <li>
        <NavLink exact activeClassName={style.active} to='/'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName={style.active} to='/battle'>
          Battle
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName={style.active} to='/popular'>
          Popular
        </NavLink>
      </li>
    </ul>
  )
}

module.exports = Nav;
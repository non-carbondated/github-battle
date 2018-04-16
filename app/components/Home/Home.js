import React from 'react';
import { Link } from 'react-router-dom';
import style from './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <h1>Github Battle: Battle your friends&hellip;and stuff.</h1>

        <Link className={style.button} to='/battle'>
          Battle
        </Link>
      </div>
    )
  }
}

module.exports = Home;
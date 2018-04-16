import React from 'react';
import Home from '../Home/Home';
import Battle from '../Battle/Battle';
import Popular from '../Popular/Popular';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import style from './App.scss';
import Nav from '../Nav/Nav';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className={style.container}>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/battle' component={Battle} />
            <Route path='/popular' component={Popular} />
            <Route render={function() {
              return <p>Not Found!</p>
            }} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

module.exports = App;
var React = require('react');
var Popular = require('../Popular/Popular');
import style from './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <Popular />
      </div>
    )
  }
}

module.exports = App;
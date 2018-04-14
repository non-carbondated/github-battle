import React from 'react';
import PropTypes from 'prop-types';
import Emoji from 'node-emoji';
var api = require('../../utils/api');
import RepoCard from '../RepoCard/RepoCard';
import style from './Popular.scss';
console.log(style);

function SelectLanguage (props) {
  var languages = [
    'All',
    'JavaScript',
    'Ruby',
    'Java',
    'CSS',
    'Python'
  ];

  return (
    <ul className={style.languages}>
      {languages.map((lang) => {
        return (
          <li
            className={lang === props.selectedLanguage ? style.isSelected : ''}
            onClick={props.onSelect.bind(null, lang)}
            key={lang}>
            {lang}
          </li>
        )
      })}
    </ul>
  )
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

function RepoGrid (props) {
  return (
    <ul className={style.popularList}>
      {props.repos.map((repo, index) => {
        return (
          <li key={repo.name} className={style.popularItem}>
            <div className={style.popularRank}><span>{index + 1}</span></div>
            <RepoCard repo={repo} />
          </li>
        )
      })}
    </ul>
  )
}

RepoGrid.propTypes = {
  repos: PropTypes.array.isRequired
}

class Popular extends React.Component {
  constructor (props) {
    super(props);
    var emojiMap = [];
    this.state = {
      selectedLanguage: 'All',
      repos: []
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  componentDidMount () {
    this.updateLanguage(this.state.selectedLanguage);
  }

  encodeEmojiShortcodes(text) {
    if (text === null) {
      return '';
    }
    return text.replace(/:.*?:/g, (match) => Emoji.get(match) + ' ');
  }

  updateLanguage(lang) {
    this.setState(() => {
      return {
        selectedLanguage: lang,
        repos: []
      }
    });

    api.fetchPopularRepos(lang)
      .then(function(repos) {
        console.log(repos);
        repos = repos.map((repo) => {
          return Object.assign({}, repo, { description: this.encodeEmojiShortcodes(repo.description) });
        });

        this.setState(function() {
          return {
            repos: repos
          }
        })
      }.bind(this));
  }

  render() {
    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
        <RepoGrid repos={this.state.repos} />
      </div>
    )
  }
}

module.exports = Popular;
import React from 'react';
import PropTypes from 'prop-types';
import Emoji from 'node-emoji';
import style from './RepoCard.scss';
console.log(style);

function RepoCard (props) {
  return (
    <div className={style.card}>
      <img
        className={style.avatar}
        src={props.repo.owner.avatar_url}
        alt={`Avatar for ${props.repo.owner.login}`}
      />
      <ul className={style.details}>
        <li>
          <a href={props.repo.html_url} target="_blank">
            {props.repo.full_name.split('/')[0]} / <strong>{props.repo.full_name.split('/')[1]}</strong>
          </a>
        </li>
        <li className={style.description}>{props.repo.description}</li>
        <li>★ {props.repo.stargazers_count.toLocaleString()}</li>
      </ul>
    </div>
  )
}

RepoCard.propTypes = {
  repo: PropTypes.object.isRequired
}

module.exports = RepoCard;
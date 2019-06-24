import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faPen } from '@fortawesome/free-solid-svg-icons'

const Tweets = (props) => {

  const tweetlist = props.tweetlist;

  return (
    <ul className="tweet-list">
      { tweetlist ? tweetlist.map(tweet => {

        const { id, user, contents } = tweet;

        return (
          <li key={id}>
            <p>{user}</p>
            <span>{contents}</span>
            <button type='button'><FontAwesomeIcon icon={faTrashAlt} onClick={() => props.removeHandler(id)}/></button>
            <button type='button'><FontAwesomeIcon icon={faPen} onClick={() => props.editHandler(id)}/></button>
          </li>
        )
      }): "" }
    </ul>
  )
}

export default Tweets;
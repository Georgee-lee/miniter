import React from 'react';

const Tweets = (props) => {

  const tweetlist = props.tweetlist;

  return (
    <ul className="tweet-list">
      { tweetlist ? tweetlist.map((tweet, i) => {
        return (
          <li key={i}>
            <p>{tweet.user}</p>
            <span>{tweet.contents}</span>
          </li>
        )
      }): "" }
    </ul>
  )
}

export default Tweets;
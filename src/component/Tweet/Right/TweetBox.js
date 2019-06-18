import React from 'react';

const TweetBox = () => {
  return (
    <div className="tweet-input-wrap">
      <textarea name="user-tweet" className="user-tweet" cols="30" rows="6" placeholder="What's happening?"></textarea>
      <button type="button" className="send-tweet">Tweet</button>
    </div>
  )
}

export default TweetBox;
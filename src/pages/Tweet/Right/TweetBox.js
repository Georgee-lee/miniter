import React from 'react';
import Button from '../../../component/Button/Button';

const TweetBox = (props) => {

  return (
    <div className="tweet-input-wrap">
      <textarea 
        name="user-tweet" 
        className="user-tweet" 
        cols="30" 
        rows="6" 
        placeholder="What's happening?"
        value={props.value}
        onChange={props.onChange}
      ></textarea>
      <Button 
        type="button"
        className="send-tweet"
        onClick={props.onClick}
        value="Tweet!"
      />
    </div>
  )
}

export default TweetBox;
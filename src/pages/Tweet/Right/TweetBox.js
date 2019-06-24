import React from 'react';
import Button from '../../../component/Button/Button';

const TweetBox = (props) => {

  const { isEdit } = props;

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
        onClick={isEdit ? props.onEdit : props.onClick}
        value={isEdit ? "Save!" : "Tweet!"}
      />
    </div>
  )
}

export default TweetBox;
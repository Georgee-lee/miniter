import React from 'react';
import LeftContainer from './Left/LeftContainer';
import RightContainer from './Right/RightContainer';

import './Tweet.css';

const Tweet = () => {
  return (
    <div className="tweet-container">
      <LeftContainer />
      <RightContainer />
    </div>
  )
}

export default Tweet;
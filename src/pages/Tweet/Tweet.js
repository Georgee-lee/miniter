import React from 'react';
import LeftContainer from './Left/LeftContainer';
import RightContainer from './Right/RightContainer';
import './Tweet.css';

const fakeUser = {
  name: 'George',
  tweet: 3
}

class Tweet extends React.Component {

  state = {
    user: fakeUser
  }

  render() {

    const { user } = this.state

    return (
      <div className="tweet-container">
        <LeftContainer user={user}/>
        <RightContainer user={user}/>
      </div>
    )
  }
}

export default Tweet;
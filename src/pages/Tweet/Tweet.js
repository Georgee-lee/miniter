import React from 'react';
import LeftContainer from './Left/LeftContainer';
import RightContainer from './Right/RightContainer';
import './Tweet.css';

const fakeUser = {
  name: 'George',
  tweet: 5
}

class Tweet extends React.Component {

  state = {
    user: fakeUser
  }

  render() {
    return (
      <div className="tweet-container">
        <LeftContainer user={this.state.user}/>
        <RightContainer user={this.state.user}/>
      </div>
    )
  }
}

export default Tweet;
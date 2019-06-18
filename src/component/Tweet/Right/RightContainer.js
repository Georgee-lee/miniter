import React, { Component } from 'react';
import './RightStyle.css';
import Tweets from './Tweets';
import TweetBox from './TweetBox';
import tweetsData from '../../../data/getAllTimeline.json';

class RightContainer extends Component {

  state = {
    tweets: tweetsData.result
  }

  render () {
    return (
      <div className="right-container">
        <TweetBox />
        <Tweets tweetlist={this.state.tweets}/>
      </div>
    )
  }
}

export default RightContainer;
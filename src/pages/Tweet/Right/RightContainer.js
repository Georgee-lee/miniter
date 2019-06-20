import React, { Component } from 'react';
import './RightStyle.css';
import Tweets from './Tweets';
import TweetBox from './TweetBox';
import tweetsData from '../../../data/getAllTimeline.json';

class RightContainer extends Component {

  state = {
    tweets: tweetsData.result,
    input: '',
    user: this.props.user.name
  }

  handleEnter = (e) => {
    // console.log(e.keyCode);
    if(e.keyCode === 13) {
      this.handleClick();
    }
  }  

  handleChange = (e) => {
    this.setState({
      input: e.currentTarget.value.trim()
    })
  }

  handleClick = () => {

    if(!this.state.input) {
      alert('내용을 입력해 주세요');
      return;
    }

    const newTweet = {
      user: this.state.user,
      contents: this.state.input
    }

    const newTweets = [newTweet, ...this.state.tweets];

    this.setState({
      input: '',
      tweets: newTweets
    })
  }

  render () {

    return (
      <div className="right-container" onKeyUp={(e) => this.handleEnter(e)}>
        <TweetBox onChange={this.handleChange} onClick={this.handleClick} value={this.state.input}/>
        <Tweets tweetlist={this.state.tweets} />
      </div>
    )
  }
}

export default RightContainer;
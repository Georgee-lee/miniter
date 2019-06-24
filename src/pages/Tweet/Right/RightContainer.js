import React, { Component } from 'react';
import './RightStyle.css';
import Tweets from './Tweets';
import TweetBox from './TweetBox';
import tweetsData from '../../../data/getAllTimeline.json';

class RightContainer extends Component {

  state = {
    tweets: tweetsData.result,
    input: '',
    user: this.props.user.name,
    isEdit: false
  }

  handleEnter = (e) => {
    if(e.keyCode === 13) {
      this.handleClick();
    }
  }

  handleChange = (e) => {
    this.setState({
      input: e.currentTarget.value
    })
  }

  handleNewTweet = () => {

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

  handleDelete = (id) => {
    // 원래 가지고 있던 array에서 !== 를 찾아 삭제 후 다시 setState로
    const prevTweets = this.state.tweets;
    const newTweets = prevTweets.filter(tweet => {
      // tweet이 객체일 것이다
      return tweet.id !== id;
    })

    this.setState({
      tweets: newTweets
    })
  }

  changeEditMode = (id) => {
    const targetTweet = this.state.tweets.filter(tweet => {
      return tweet.id === id
    });
    // console.log(targetTweet[0].contents);
    // 렌더링을 다시 할때 리스트도 그리는데 값이 달라짐!!
    this.setState({
      editTweet: targetTweet[0],
      input: targetTweet[0].contents,
      isEdit: true
    })
  }

  handleEdit = () => {
    // 원래 게시물을 찾아서 내용 바꾸기
    const prevTweets = this.state.tweets;
    let findIdx = 0;
    const editedTweet = prevTweets.filter((tweet, idx) => {
      if(tweet.id === this.state.editTweet.id) {
        findIdx = idx;
        return tweet;
      }
    });
    editedTweet[0].contents = this.state.input

    prevTweets[findIdx] = editedTweet[0];

    this.setState({
      input: '',
      tweets: prevTweets,
      isEdit: false
    });
  }

  render () {
    return (
      <div className="right-container" onKeyUp={(e) => this.handleEnter(e)}>
        <TweetBox 
          onChange={this.handleChange}
          onClick={this.handleNewTweet}
          value={this.state.input}
          isEdit={this.state.isEdit}
          onEdit={this.handleEdit}
        />
        <Tweets 
          tweetlist={this.state.tweets}
          removeHandler={this.handleDelete}
          editHandler={this.changeEditMode} />
      </div>
    )
  }
}

export default RightContainer;
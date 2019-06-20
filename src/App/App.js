import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <img src="https://www.blockmedia.co.kr/wp-content/uploads/2018/09/1-9.png" alt="logo" className="tw-logo"/>
        <div className="move">
          <Link to="/login" className="move-btn">로그인</Link>
          <Link to="/signup" className="move-btn">회원가입</Link>
          <Link to="/tweet" className="move-btn">트윗보기</Link>
        </div>
      </div>
    )
  }
}

export default App;

import React, { Component } from 'react';
import UserInfo from './UserInfo';
import './LeftStyle.css';

class LeftContainer extends Component {

  state = {
    user: null
  }

  render() {
    return (
      <div className="left-container">
        <div className="user-info-wrap">
          <div className="user-info-header"></div>
          <UserInfo />
      </div>
    </div>
    )
  }
}

export default LeftContainer;
import React from 'react';

const UserInfo = (props) => {
  return (
    <div className="user-info-content">
      <span className="user-tweet-name">{props.user.profile || "George"}</span>
      <div className="tweet-info-wrap">
        <span className="tweet-tweet">Tweets</span>
        <span className="user-tweet-count">{props.count || 1}</span>
      </div>
    </div>
  )
}

export default UserInfo;
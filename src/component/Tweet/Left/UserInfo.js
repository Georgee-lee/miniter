import React from 'react';

const UserInfo = (user) => {
  return (
    <div className="user-info-content">
      <span className="user-tweet-name">{user.name || "George"}</span>
      <div className="tweet-info-wrap">
        <span className="tweet-tweet">Tweets</span>
        <span className="user-tweet-count">{user.count || 1}</span>
      </div>
    </div>
  )
}

export default UserInfo;
import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {

  return (
    <div className="signup-container">
      <h1>Sign up to Miniter</h1>

      <form className="signup-wrap">
        <input type="text" placeholder="Enter ID" className="user-id" />
        <input type="password" placeholder="Password" className="user-pw" />
        <input type="password" placeholder="Re Password" className="user-pw-check" />
        <input type="text" placeholder="Enter Profile" className="user-profile" />
        <input type="submit" className="signup-btn" value="Sign up" />
        <p className="alert"></p>
      </form>

      <div>
        <Link to="/" className="move-btn">홈으로</Link>
      </div>
  </div>
  )
}

export default Signup;
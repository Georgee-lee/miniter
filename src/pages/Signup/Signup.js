import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../../component/InputBox/Input';
import './Signup.css';

const Signup = () => {

  return (
    <div className="signup-container">
      <h1>Sign up to Miniter</h1>

      <Input type="text" placeholder="Enter ID" className="user-id" />
      <Input type="password" placeholder="Password" className="user-pw" />
      <Input type="password" placeholder="Re Password" className="user-pw-check" />
      <Input type="text" placeholder="Enter Profile" className="user-profile" />
      <Input type="submit" className="signup-btn" value="Sign up" />
      <p className="alert"></p>

      <div>
        <Link to="/" className="move-btn">홈으로</Link>
      </div>
  </div>
  )
}

export default Signup;
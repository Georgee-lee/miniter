import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {

  return (
    <div className="login-container">
      <h1>Log in to Miniter</h1>

      <form className="login-wrap">
        <input type="text" placeholder="Enter ID" className="user-id"/ >
        <input type="password" placeholder="Password" className="user-pw"/ >
        <input type="submit" className="login-btn" value="Log in"/ >
      </form>

      <div className="move">
        <Link to="/signup" className="move-btn">회원가입</Link>
        <Link to="/tweet" className="move-btn">트윗보기</Link>
      </div>
    </div>
  )
}

export default Login;
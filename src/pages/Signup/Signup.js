import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import Input from '../../component/InputBox/Input';
import './Signup.css';

class Signup extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    user_id: "",
    user_pw: "",
    email: "",
    profile: ""
  }

  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  isFilled = () => {
    if(this.state.user_id.length >= 6 &&
       this.state.user_pw.length >= 6 &&
       this.state.profile.length >= 4 &&
       this.state.email) 
    {
      return true;
    } else {
      return false;
    }
  }

  handleSignUp = (e) => {
    e.preventDefault();

    const newUser = {
      user_id: this.state.user_id,
      user_pw: this.state.user_pw,
      email: this.state.email,
      profile: this.state.profile
    }

    fetch('http://10.58.4.65:8000/user/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
    .then(res => res.json)
    .then(json => {
      alert('확인');
      this.props.history.push('./login');
    });
  }

  render () {

    return (
      <div className="signup-container">
        <h1>Sign up to Miniter</h1>
  
        <Input type="text" placeholder="Enter ID" name="user_id" value={this.state.user_id} className="user-id" onChange={(e) => this.handleInput(e)} />
        <Input type="password" placeholder="Password" name="user_pw" value={this.state.user_pw} className="user-pw" onChange={(e) => this.handleInput(e)} />
        <Input type="text" placeholder="email" name="email" value={this.state.email} className="user-pw-check" onChange={(e) => this.handleInput(e)} />
        <Input type="text" placeholder="Enter Profile" name="profile" value={this.state.profile} className="user-profile" onChange={(e) => this.handleInput(e)} />
        <Input type="submit" className={this.isFilled() ? "signup-btn active" : "signup-btn"} value="Sign up" onClick={this.handleSignUp} />
        <p className="alert"></p>
  
        <div>
          <Link to="/" className="move-btn">홈으로</Link>
        </div>
    </div>
    )
  }
}

export default withRouter(Signup);
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

  handleInput(name, value) {
    this.setState({
      [name]: value
    });
  }

  handleClick = (e) => {
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
  
        <Input type="text" placeholder="Enter ID" className="user-id" onChange={(e) => this.handleInput('user_id', e.target.value)} />
        <Input type="password" placeholder="Password" className="user-pw" onChange={(e) => this.handleInput('user_pw', e.target.value)}/>
        <Input type="text" placeholder="email" className="user-pw-check" onChange={(e) => this.handleInput('email', e.target.value)}/>
        <Input type="text" placeholder="Enter Profile" className="user-profile" onChange={(e) => this.handleInput('profile', e.target.value)}/>
        <Input type="submit" className="signup-btn" value="Sign up" onClick={this.handleClick} />
        <p className="alert"></p>
  
        <div>
          <Link to="/" className="move-btn">홈으로</Link>
        </div>
    </div>
    )
  }
}

export default withRouter(Signup);
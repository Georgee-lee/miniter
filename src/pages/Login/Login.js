import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import Input from '../../component/InputBox/Input';
import './Login.css';

class Login extends React.Component {

  state = {
    idCheck: false,
    pwCheck: false,
    id: '',
    pw: ''
  }

  checkActive = (e, val) => {
    if(val === 1) {
      this.setState({
        idCheck: true,
        id: e.currentTarget.value
      })
    }

    if(val === 2) {
      this.setState({
        pwCheck: true,
        pw: e.currentTarget.value
      })
    }
  }

  goBack = () => {
    this.props.history.push('/');
  }

  // login() {
  //     const id = this.state.id;
  //     const pw = this.state.pw;

  //     fetch('').then()

  //     //  성공시 this.props.history.push('/tweet') 이런 식으로 Router의 히스토리를 이용하여 전달
  // }

  render() {

    const { id, pw, idCheck, pwCheck } = this.state;

    return (
      <div className="login-container">
        <h1>Log in to Miniter</h1>

        <Input 
          value={id}
          type="text" 
          placeholder="Enter ID" 
          className="user-id"
          onChange={(e) => this.checkActive(e, 1)}
        />

        <Input 
          type="password" 
          placeholder="Password" 
          className="user-pw" 
          onChange={(e) => this.checkActive(e, 2)}
        />

        <Input 
          // onClick={this.login}
          type="submit"
          className={ idCheck && pwCheck ? "login-btn active" : "login-btn"}
          value="Log in"
        />

        <div className="move">
          <Link to="/signup" className="move-btn">회원가입</Link>
          <button onClick={this.goBack} className="move-btn">홈으로</button>
        </div>
      </div>
    )
  }
}

export default withRouter(Login);
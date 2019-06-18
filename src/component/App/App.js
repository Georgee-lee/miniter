import React, { Component } from 'react';
import { 
    BrowserRouter as Router, 
    Route, 
    Switch } from 'react-router-dom';
import Tweet from '../Tweet/Tweet';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/tweet" component={Tweet} />
          <Route exact path="/" component={Login} />
        </Switch>
      </Router>
    )
  }
}

export default App;

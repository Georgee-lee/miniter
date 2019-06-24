import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import App from './App/App';
import Tweet from './pages/Tweet'
import Login from './pages/Login';
import Signup from './pages/Signup';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/tweet" component={Tweet} />
        </Switch>
      </Router>
    )
  }
}

export default Routes;
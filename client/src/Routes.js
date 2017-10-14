import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from "react-router";
import LandingPage from './components/LandingPage/LandingPage';
import Feature from './components/Feature/Feature';
import Crew from './components/Crew/Crew';
import Activity from './components/Activity/Activity';
// import LoginForm from './components/LoginForm/LoginForm';
import SignupForm from './components/SignupForm/SignupForm';
import App from './App';

const Routes = () => (
  <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path = '/feature' component={Feature}/>
      <Route path = '/landing' component={LandingPage}/>
      <Route path = '/crew' component={Crew} />
      <Route path = '/home' component={LandingPage} />
      <Route path = '/activity' component={Activity} />
      {/* <Route path = '/loginForm' component={LoginForm} /> */}
      <Route path = '/signupForm' component={SignupForm} />
  </Router>
);



export default Routes;

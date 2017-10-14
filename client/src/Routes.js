import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from "react-router";
import LandingPage from './components/LandingPage/LandingPage';
import Feature from './components/Feature/Feature';
import Crew from './components/Crew/Crew';
import Activity from './components/Activity/Activity';
import User from './components/User/User';
import App from './App';

const Routes = () => (
  <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path = '/feature' component={Feature}/>
      <Route path = '/landing' component={LandingPage}/>
      <Route path = '/crew' component={Crew} />
      <Route path = '/home' component={LandingPage} />
      <Route path = '/activity' component={Activity} />
      <Route path = '/user' component={User} />
  </Router>
);



export default Routes;

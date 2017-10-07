import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from "react-router";
import LandingPage from './components/LandingPage/LandingPage';
import Feature from './components/Feature/Feature';

const Routes = () => (
  <Router history={browserHistory}>
      <Route path="/" component={LandingPage}>

          <Route path = "/feature" component = {Feature}/>

          <IndexRoute component={LandingPage} />

      </Route>
  </Router>
);



export default Routes;

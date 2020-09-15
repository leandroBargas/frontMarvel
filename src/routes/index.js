import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../components/home';
import HeroDetails from '../components/heroDetails';

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="" exact={true} component={Home} />
          <Route path="hero-details" component={HeroDetails} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default Routes;

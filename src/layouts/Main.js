import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Navigation from './Navbar';
import History from '../pages/History';
import Mission from '../pages/Mission';
import Organization from '../pages/Organization';
import PastEvents from '../pages/PastEvents';
import Home from '../pages/Home';

class Main extends Component {
  render() {
    return (
      <div>
          <Router>
              <div>
                <Navigation />
                <div className="container" style={{marginTop: "10px"}}>
                    <Switch>
                        <Route path="/history" component={History}/>
                        <Route path="/mission" component={Mission}/>
                        <Route path="/organization" component={Organization}/>
                        <Route path="/past-events" component={PastEvents}/>
                        <Route path="/" component={Home}/>
                    </Switch>
                </div>
              </div>
          </Router>
      </div>
    );
  }
}

export default Main;

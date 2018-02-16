import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navigation from './Navbar';
import History from '../pages/History';
import Mission from '../pages/Mission';
import Organization from '../pages/Organization';
import PastEvents from '../pages/PastEvents';
import Home from '../pages/Home';
import Speakers from '../pages/resources/Speakers';
import OpenCFP from '../pages/resources/OpenCFP';
import Diversity from '../pages/resources/Diversity';
import Examples from '../pages/resources/Examples';
import Footer from './Footer';

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
                        <Route path="/resources/speakers" component={Speakers}/>
                        <Route path="/resources/open-cfps" component={OpenCFP}/>
                        <Route path="/resources/examples" component={Examples}/>
                        <Route path="/resources/diversity" component={Diversity}/>
                        <Route path="/" component={Home}/>
                    </Switch>
                </div>
              </div>
          </Router>
          <Footer style={{marginBottom: "0px"}}/>

      </div>
    );
  }
}

export default Main;

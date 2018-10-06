import React, { Component } from 'react';
import TwitterHandle from '../components/TwitterHandle';

class Organization extends Component {
  render() {
    return (
      <div className="container">
        <h1>Organization</h1>
        <hr />

        <h2 className="text-success">Executive Committee</h2>
        <h3>AdaZebra <small className="organization-subtitle">Executive Director</small></h3>
        <h3>Tyler Walker <small className="organization-subtitle">Deputy Director</small></h3>
        <h3>Mansi Thakar <small className="organization-subtitle">Head of CFP Review Board</small></h3>
        <h3>Steve Christey <small className="organization-subtitle">Head of Community Engagement</small></h3>
        <hr />
        
        <h2 className="text-success">Volunteers</h2>
        <p>InfoSec Unlocked is purely a volunteer-driven effort. If you're interested in joining us please reach out to: <a href="mailto:insecunlocked@gmail.com">insecunlocked@gmail.com</a></p>
      </div>
    );
  }
}

export default Organization;

import React, { Component } from 'react';

class Organization extends Component {
  render() {
    return (
      <div className="container">
        <h1>Organization</h1>
        <hr />

        <h2 className="text-success">Executive Committee</h2>
        <h3>AdaZebra <small className="organization-subtitle">Executive Director</small></h3>
        <p>Handles all core business operations and maintains the direction of the organization</p>
        
        <h3>Tyler Walker <small className="organization-subtitle">Deputy Director</small></h3>
        <p>Oversees the meeting agendas and assists with daily operations</p>

        <h3>Mansi Thakar <small className="organization-subtitle">Head of CFP Review Board</small></h3>
        <p>Manages communication between the CFP Review Board and applicants</p>

        <h3>Steve Christey <small className="organization-subtitle">Head of Community Engagement</small></h3>
        <p>Manages external relations with the InfoSec community</p>
        <hr />
        
        <h2 className="text-success">Volunteers</h2>
        <p>InfoSec Unlocked is purely a volunteer-driven effort. If you're interested in joining us please reach out to: <a href="mailto:insecunlocked@gmail.com">insecunlocked@gmail.com</a></p>
      </div>
    );
  }
}

export default Organization;

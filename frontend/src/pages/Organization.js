import React, { Component } from 'react';

class Organization extends Component {
  render() {
    return (
      <div className="container">
        <h1>Organization</h1>
        <hr />

        <h2 className="text-success">Board of Directors</h2>
        <h3>AdaZebra <small className="organization-subtitle">President of the Board</small></h3>
        <h3>Tarah Wheeler <small className="organization-subtitle">Treasurer</small></h3>
        <p>
          The Board determines the organization's mission, sets policy, and assesses and approves programs
          and services that are appropriate to our mission of supporting diverse voices at InfoSec conferences. 
        </p>
        <p>
          If you are interested in serving on our board please reach out to: <a href="mailto:insecunlocked@gmail.com">insecunlocked@gmail.com</a>.
        </p>
        <br />

        <h2 className="text-success">Executive Committee</h2>
        <h3>Tyler Walker <small className="organization-subtitle">Executive Director</small></h3>
        <h3>Steve Christey <small className="organization-subtitle">Executive Director</small></h3>
        <p>
            The executive committee handles the day-to-day operations.
        </p>
      </div>
    );
  }
}

export default Organization;
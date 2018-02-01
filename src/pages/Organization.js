import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome'

class Organization extends Component {
  render() {
    return (
      <div className="container">
        <h1>Organization</h1>
        <hr />

        <h2>Board of Directors</h2>
        <h3>AdaZebra <small className="organization-subtitle">President of the Board</small></h3>
        <h3>Tarah Wheeler <small className="organization-subtitle">Treasurer</small></h3>
        <p>
            The board serves as the backbone of the organization. 
            This text is garbage and I'm not sure what to put here.
            We should just be describing the board here.
        </p>
        <br />

        <h2>Executive Committee</h2>
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

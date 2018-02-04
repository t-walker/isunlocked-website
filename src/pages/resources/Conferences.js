import React, { Component } from 'react';

class Conferences extends Component {
  render() {
    return (
      <div className="container">
        <h1>Conferences</h1>

        <h3 className={"text-success"}>General Statement</h3>
        <h4>Opening doors for diverse voices in information security conferences</h4>
        <br />
        <h3 className={"text-success"}>Specific Aims</h3>
        <p>
          <ul style={{fontSize: "125%"}}>
            <li>Assist other diversity and inclusion related efforts at conferences</li>
            <li>Provide speakers the ability to have papers reviewed before submission</li>
            <li>Engage in discussions with conference organizers to promote inclusive policies</li>

          </ul>
        </p>
      </div>
    );
  }
}

export default Conferences;

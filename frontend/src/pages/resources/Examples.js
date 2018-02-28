import React, { Component } from 'react';
import ResourceLink from '../../components/ResourceLink';

import ExampleCFPs from "../../assets/json/ExampleCFPs.json";

class Examples extends Component {
  constructor() {
    super();
    this.resources = ExampleCFPs;
  }
  

  renderResources() {
    let resources = [];

    resources.push(
      <h2 className="text-primary" style={{textAlign: "center"}}>
      Sample CFP Submissions
      </h2>
    );

    resources.push(
      <p>
        Disclaimer: CFP formats vary across conferences and may change year-to-year.
      </p>
    );

    for (let i = 0; i < this.resources.length; i++) {
      let link = this.resources[i];
      resources.push(<ResourceLink {... link} />)
    }

    return resources;
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Example CFPs &amp; Talks</h1>
  
            <br />
            {this.renderResources()}
          </div>
        </div>
      </div>
    );
  }
}

export default Examples;

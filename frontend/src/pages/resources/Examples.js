import React, { Component } from 'react';
import ResourceLink from '../../components/ResourceLink';

class Examples extends Component {
  constructor() {
    super();

    this.resources = [
      {
        url: "https://github.com/sghctoma/gamehack-defcon23/blob/master/cfp_application.txt",
        name: "Gamehack DEF CON 23",
        author: "Tamas Szakaly"
      },
      {
        url: "https://github.com/sghctoma/antfs-poc-defcon24/tree/master/cfp-application",
        name: "Help I've Got Ants  DEF CON 23",
        author: "Tamas Szakaly"
      }
    ];
  }

  renderResources() {
    let resources = [];

    resources.push(<h2 className="text-primary" style={{textAlign: "center"}}>Sample CFP Submissions</h2>);

    for (let i = 0; i < this.resources.length; i++) {
      resources.push(<ResourceLink {... this.resources[i]} />)
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

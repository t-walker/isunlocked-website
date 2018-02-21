import React, { Component } from 'react';
import ResourceLink from '../../components/ResourceLink';

import DiversityResourceLinks from "../../assets/json/DiversityResourceLinks.json";
import CodeOfConductResourceLinks from "../../assets/json/CodeOfConductLinks.json";
import CFPResourceLinks from "../../assets/json/CFPResourceLinks.json";

class Diversity extends Component {
  static resourceLinks = DiversityResourceLinks;
  static cocLinks = CodeOfConductResourceLinks;
  static cfpLinks = CFPResourceLinks;

  renderResourceLinks() {
    let resourceLinks = [];

    for (let i = 0; i < this.resourceLinks.length; i++) {
      let link = this.resourceLinks[i];
      resourceLinks.push(<ResourceLink {... link} />);
    }

    return resourceLinks;
  }

  renderCFPLinks() {
    let cfpLinks = [];

    for (let i = 0; i < this.cfpLinks.length; i++) {
      let link = this.cfpLinks[i];
      cfpLinks.push(<ResourceLink {... link} />);
    }

    return cfpLinks;
  }


  renderCoCLinks() {
    let cocLinks = [];

    for (let i = 0; i < this.cocLinks.length; i++) {
      let link = this.cocLinks[i];
      cocLinks.push(<ResourceLink {... link} />);
    }

    return cocLinks;
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Diversity &amp; Inclusion</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <h2 className="text-primary" style={{textAlign: "center"}}>Code of Conducts</h2>
            <p>
              There have been many disucssions surrounding Code of Conducts. 
              Below are several different articles that show the varying opinions 
              on how to write an effective code of conduct. These do not necessarily 
              reflect the views of InfoSec Unlocked.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <h3 className="text-info">Online Guides</h3>
            <p>
              These guides contain resources and opinions of others about how to create and implement
              effective code of conducts.
            </p>
            {this.renderResourceLinks()}
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <h3 className="text-info">Examples</h3>
            <p>
              These are examples from large conferences around the country and demonstrate some of the 
              popular ways to construct these agreements.
            </p>
            {this.renderCoCLinks()}
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <h2 className="text-primary" style={{textAlign: "center"}}>Call for Papers</h2>
            <h3 className="text-info">Articles</h3>
            <p>
              These are examples from large conferences around the country and demonstrate some of the 
              popular ways to construct these agreements.
            </p>
            {this.renderCFPLinks()}
          </div>
        </div>
      </div>
    );
  }
}

export default Diversity;

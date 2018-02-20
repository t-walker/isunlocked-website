import React, { Component } from 'react';
import ResourceLink from '../../components/ResourceLink';

class Diversity extends Component {
  constructor() {
    super();

    this.resourceLinks = [
      {
        url: "https://www.defcon.org/html/links/dc-code-of-conduct.html",
        name: "Why Have a Code of Conduct",
        author: "Ethics & Compliance Initiative"
      },
      {
        url: "http://confcodeofconduct.com/",
        name: "Conference Code of Conduct",
        author: "Left Logic"
      },
      {
        url: "https://www.ashedryden.com/blog/codes-of-conduct-101-faq",
        name: "Codes of Conduct 101 + FAQ",
        author: "Ashe Dryden"
      },
      {
        url: "http://www.oreilly.com/conferences/code-of-conduct.html",
        name: "Conferences Code of Conducts",
        author: "O'Reilly"
      }
    ];

    this.cocLinks = [
      {
        url: "https://www.defcon.org/html/links/dc-code-of-conduct.html",
        name: "DEF CON",
        author: "Code of Conduct"
      },
      {
        url: "https://www.bsidesroc.com/about/code-of-conduct/",
        name: "BSidesROC",
        author: "Code of Conduct"
      },
      {
        url: "http://bsidestampa.net/code-of-conduct/",
        name: "BSidesTampa",
        author: "Code of Conduct"
      },
      {
        url: "https://www.derbycon.com/blog/derbycon-values-safety-and-code-of-conduct/",
        name: "DerbyCon",
        author: "Code of Conduct"
      },
      {
        url: "https://queercon.org/about-us/code-conduct/",
        name: "QueerCon",
        author: "Code of Conduct"
      },
      {
        url: "https://www.usenix.org/conferences/coc",
        name: "USENIX",
        author: "Code of Conduct"
      },
      {
        url: "https://circlecitycon.com/policies/",
        name: "Circle City Con",
        author: "Code of Conduct"
      },
      {
        url: "https://nolacon.com/code-of-conduct/",
        name: "NolaCon",
        author: "Code of Conduct"
      }
    ];

    this.cfpLinks = [
      {
        url: "https://greatresearch.org/2013/10/25/program-committees-and-paper-selection/",
        name: "Program Committees and Paper Selection",
        author: "greatresearch.org"
      },
      {
        url: "https://people.cs.umass.edu/~brun/doubleblind.html",
        name: "A case for double-blind reviewing in software engineering",
        author: "Yuriy Brun, University of Massachusetts"
      },
      {
        url: "https://www.insidehighered.com/news/2016/09/07/new-study-suggests-continued-bias-academic-conference-panel-selections",
        name: "The Gender Factor in Conference Presentations",
        author: "Inside Higher Ed"
      }
    ];
  }

  renderResourceLinks() {
    let resourceLinks = [];

    for (let i = 0; i < this.resourceLinks.length; i++) {
      let link = this.resourceLinks[i];
      resourceLinks.push(<ResourceLink url={link.url} name={link.name} author={link.author} />);
    }

    return resourceLinks;
  }

  renderCFPLinks() {
    let cfpLinks = [];

    for (let i = 0; i < this.cfpLinks.length; i++) {
      let link = this.cfpLinks[i];
      cfpLinks.push(<ResourceLink url={link.url} name={link.name} author={link.author} />);
    }

    return cfpLinks;
  }


  renderCoCLinks() {
    let cocLinks = [];

    for (let i = 0; i < this.cocLinks.length; i++) {
      let link = this.cocLinks[i];
      cocLinks.push(<ResourceLink url={link.url} name={link.name} author={link.author} />);
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

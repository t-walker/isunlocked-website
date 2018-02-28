import React, { Component } from 'react';

import PropTypes from 'prop-types'; 

import logo from '../assets/img/logo.png';

class Home extends Component {
    resources = [
        {
          title: "Get Started Speaking",
          url: "/resources/speakers",
          children: (
              <p>
                  Looking to start speaking at conferences but don't know where to start?
                  We provide resources and services for new speakers looking to get their start.
              </p>
          )
        },
        {
          title: "Diversity & Inclusion" ,
          url: "/resources/diversity",
          children: (
              <p>
                  Interested in fostering a more inclusive environment at your conference?
                  ISUnlocked has several resources on the best practices for conference organizers.
              </p>
          )
        },
        {
          title: "Open CFPs" ,
          url: "/resources/open-cfps",
          children: (
              <p>
                  Most conference speakers go through a CFP process where they submit directly to conferences.
                  If you're interested in speaking at conferences, check this listing of open CFPs provided by <a href="https://twitter.com/cfp_time">@cfp_time</a>.
              </p>
          )
        },
        {
          title: "Learn by Example" ,
          url: "/resources/examples",
          children: (
              <p>
                  We've compiled these talks and CFPs to help you figure out what you'll need to submit to a conference.
                  Use these to help shape your first talk from CFP to slides!
              </p>
          )
        }
    ]

  renderResources() {
    let resources = [];

    for (let i = 0; i < this.resources.length; i++) {
        resources.push(<Resource key={i} {... this.resources[i]} />);
    }

    return resources;
  }

  render() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <img src={logo} className="img img-fluid" alt="Purple lock with words: InfoSec Unlocked unlocking diversity"/>
                </div>                
            </div>

            <div className="row" style={{marginTop: "20px", marginBottom: "20px"}}>
                <div className="col-md-12">
                    <p className={"text-info"} style={{textAlign: "center", fontSize: "300%"}}>
                        Opening Doors for Diverse Voices in Information Security
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-8">
                    <p>
                        InfoSec Unlocked is a 501(c)(3) non-profit organization supporting information security conferences and attendees.
                        Our primary focus is to support new speakers get talks accepted at conferences. It's our belief that by providing mentorship
                        and resources to new speakers we will be able to diversify the speaker pool. 
                    </p>
                    <p>
                        We are always looking for passionate members of the InfoSec community to join our team and support our mission.
                        If you are interested in joining us please consider reaching out to <a href="mailto:insecunlocked@gmail.com">insecunlocked@gmail.com</a> for more information.
                    </p>
                </div>
                <div className="col-md-4">
                    <div className="card text-white mb-3">
                        <div className="card-body bg-secondary">
                            <h4 className="card-title text-success" style={{textAlign: "center"}}>CFP Review Program</h4>
                            <p className="card-text text-white">
                                ISUnlocked provides a free review process for new speakers looking to get feedback before they submit. 
                            </p>
                            <a className="btn btn-success btn-block" href="/register/cfp-help">Sign-Up Now</a>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="row">
                {this.renderResources()}
            </div>
            <hr />
            <div className="row">
                <div className="col-md-12">
                    <div className="card mb-3">
                      <div className="card-body text-white">
                        <h2 className="card-title" style={{textAlign: "center"}}>Support InfoSec Unlocked</h2>
                         <p className="card-text" style={{textAlign: "center"}}>
                            If you're looking to help support the InfoSec Unlocked mission, please consider <a href="https://www.paypal.com/donate/?token=NI23JOLKZbyqDCIkTXmg7qzJ7IsEcjiR3hqhIEF13CqtkUyWHwVJTq8eyV7hdCScINwOFW&country.x=US&locale.x=US">donating</a> or <a href="mailto:insecunlocked@gmail.com">volunteering</a> with us.<br />
                            All contributions are tax deductible.
                         </p>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
  }
}

class Resource extends Component {
    static propTypes = {
        children: PropTypes.object.isRequired,
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
    }
    
    render() {
        return (
            <div className="col-md-6 mb-3">
                <h2 className="text-success">{this.props.title}</h2>
                {this.props.children}
                <p><a className="btn btn-secondary" href={this.props.url} role="button">Learn More &raquo;</a></p>
            </div>
        )
    }
}

export default Home;

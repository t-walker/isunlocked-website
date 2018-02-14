import React, { Component } from 'react';

import logo from '../assets/logo.png';

class Home extends Component {
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
            <div class="row">
                <div class="col-md-8">
                    <p>
                        InfoSec Unlocked 501(c)(3) is a non-profit organization supporting information security conferences and attendees.
                        Our primary focus is to support new speakers get talks accepted at conferences. It's our belief that by providing mentorship
                        and resources to new speakers we will be able to diversify the speaker pool. 
                    </p>
                    <p>
                        We are always looking for passionate members of the InfoSec community to join our team and support our mission.
                        If you are interested in joining us please consider reaching out to <a href="mailto:insecunlocked@gmail.com">insecunlocked@gmail.com</a> for more information.
                    </p>
                </div>
                <div class="col-md-4">
                    <div class="card text-white mb-3">
                        <div class="card-body bg-secondary">
                            <h4 class="card-title text-success" style={{textAlign: "center"}}>CFP Review Program</h4>
                            <p class="card-text text-white">
                                ISUnlocked provides a free review process for new speakers looking to get feedback before they submit. 
                            </p>
                            <a class="btn btn-success btn-block" href="#">Sign-Up Now</a>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-md-6">
                    <h2 className="text-success">Resources for Speakers</h2>
                    <p>
                        Looking to start speaking at conferences but don't know where to start?
                        We provide resources and services for new speakers looking to get their start.
                    </p>
                    <p><a className="btn btn-secondary" href="/resources/speakers" role="button">Learn More &raquo;</a></p>
                </div>
                <div className="col-md-6">
                    <h2 className="text-success">Diversity and Inclusion</h2>
                    <p>
                        Interested in fostering a more inclusive environment at your conference?
                        ISUnlocked has several resources on the best practices for conference organizers.
                    </p>
                    <p><a className="btn btn-secondary" href="/resources/diversity" role="button">Learn More &raquo;</a></p>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-md-6">
                    <h2 className="text-success">Open Call for Papers</h2>
                    <p>
                        Most conference speakers go through a CFP process where they submit directly to conferences.
                        If you're interested in speaking at conferences, check this listing of open CFPs provided by <a href="https://twitter.com/cfp_time">@cfp_time</a>.
                    </p>
                    <p><a className="btn btn-secondary" href="/resources/open-cfps" role="button">Learn More &raquo;</a></p>
                </div>
                <div className="col-md-6">
                    <h2 className="text-success">Conference Resources</h2>
                    <p>
                        Interested in fostering a more inclusive environment at your conference?
                        ISUnlocked has several resources on the best practices for conference organizers.
                    </p>
                    <p><a className="btn btn-secondary" href="/resources/conferences" role="button">Learn More &raquo;</a></p>
                </div>
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

export default Home;

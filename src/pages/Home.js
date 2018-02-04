import React, { Component } from 'react';

import logo from '../assets/logo.png';

class Home extends Component {
  render() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <img src={logo} className="img img-fluid" />
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
                    <div class="card text-white bg-secondary mb-3">
                        <div class="card-body bg-primary">
                            <h4 class="card-title" style={{textAlign: "center"}}>CFP Review Program</h4>
                            <p class="card-text text-white">
                                ISUnlocked provides a free review process for new speakers looking to get feedback before they submit. 
                            </p>
                            <a class="btn btn-secondary btn-block" href="#">Sign-Up Now</a>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-md-6">
                    <h2>Resources for Speakers</h2>
                    <p>
                        Looking to start speaking at conferences but don't know where to start?
                        We provide resources and services for new speakers looking to get their start.
                    </p>
                    <p><a className="btn btn-success" href="#" role="button">Learn More &raquo;</a></p>
                </div>
                <div className="col-md-6">
                    <h2>Diversity and Inclusion</h2>
                    <p>
                        Interested in fostering a more inclusive environment at your conference?
                        ISUnlocked has several resources on the best practices for conference organizers.
                    </p>
                    <p><a className="btn btn-success" href="#" role="button">Learn More &raquo;</a></p>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-md-6">
                    <h2>Open Call for Papers</h2>
                    <p>
                        Most conference speakers go through a CFP process where they submit directly to conferences.
                        If you're interested in speaking at conferences, check this listing of open CFPs provided by <a href="https://twitter.com/cfp_time">@cfp_time</a>.
                    </p>
                    <p><a className="btn btn-success" href="https://twitter.com/cfp_time" target="_blank" role="button">Learn More &raquo;</a></p>
                </div>
                <div className="col-md-6">
                    <h2>Conference Resources</h2>
                    <p>
                        Interested in fostering a more inclusive environment at your conference?
                        ISUnlocked has several resources on the best practices for conference organizers.
                    </p>
                    <p><a className="btn btn-success" href="#" role="button">Learn More &raquo;</a></p>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-md-12">
                    <div className="card border-info mb-3">
                      <div className="card-body text-primary">
                        <h2 className="card-title" style={{textAlign: "center"}}>How You Can Help</h2>
                         <p className="card-text" style={{textAlign: "center"}}>
                            If you're looking to help support the InfoSec Unlocked mission, please consider <a href="#">donating</a> or <a href="#">volunteering</a> with us.<br />
                            All contributions are tax deductible.
                         </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Home;

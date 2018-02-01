import React, { Component } from 'react';

import { Jumbotron, Button } from 'reactstrap';

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
                    <div className="card">
                        <div className="card-body" style={{textAlign: "center"}}>
                            <p className="card-text">
                                InfoSec Unlocked is the premiere resource for new speakers and diversity at InfoSec conferences.<br />
                                If you have any questions please contact us <a href="mailto:insecunlocked@gmail.com">insecunlocked@gmail.com</a>.
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div class="col-md-4">
                    <h2>New Speakers</h2>
                    <p>
                        Speakers are the backbone of conferences, but how does one get started speaking?
                        We have assembled resources for those interested in getting started.
                    </p>
                    <p><a class="btn btn-secondary" href="#" role="button">Learn More &raquo;</a></p>
                </div>
                <div class="col-md-4">
                    <h2>Diversity</h2>
                    <p>
                        Interested in fostering a more inclusive environment at your conference?
                        ISUnlocked has several resources on the best practices for conference organizers.
                    </p>
                    <p><a class="btn btn-secondary" href="#" role="button">Learn More &raquo;</a></p>
                </div>
                <div class="col-md-4">
                    <h2>Open CFPs</h2>
                    <p>
                        CFPs (Call for Papers) are where you can apply to speak at conferences.
                        We have assembled a list of conferences speakers can currently apply to.
                    </p>
                    <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                </div>
            </div>
        </div>
    );
  }
}

export default Home;

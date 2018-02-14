import React, { Component } from 'react';

class Speakers extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Speaking at Conferences</h1>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-success" style={{textAlign: "center"}}>Panels and Workshops</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="card border-success">
              <div className="card-body">
              <div className="row">
                <div className="col-md-12">
                  <h4 className="card-title text-white" style={{textAlign: "center"}}>Submitting a CFP to a Conference</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                    <iframe className="embed-responsive" src="https://www.youtube.com/embed/9yp2azFIKRY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                  </div>
                  <div className="col-md-6">
                    <p>
                      ISUnlocked hosted a talk in Feb. 2017 with several conference organizers to talk about
                      how new speakers can get invovled with the CFP submission process.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card border-success">
              <div className="card-body">
              <div className="row">
                <div className="col-md-12">
                  <h4 className="card-title text-white" style={{textAlign: "center"}}>DEF CON Unlocked</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                    <iframe className="embed-responsive" src="https://www.youtube.com/embed/sfWAefKcV-w" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                  </div>
                  <div className="col-md-6">
                    <p>
                      Tarah Wheeler hosted a live panel in Aug. 2014 with InfoSec rockstars 
                      to discuss how to get more women and other underrepresented minorities to cons. 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6">
            <div className="card border-success">
              <div className="card-body">
              <div className="row">
                <div className="col-md-12">
                  <h4 className="card-title text-white" style={{textAlign: "center"}}>BSIDES CFP 101</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                    <iframe className="embed-responsive" src="https://www.youtube.com/embed/k0prs_m7FrE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                  </div>
                  <div className="col-md-6">
                    <p>
                      BSides hosted a panel in Aug. 2016 to discuss some of the basics of conference Call for Papers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card border-success">
              <div className="card-body">
              <div className="row">
                <div className="col-md-12">
                  <h4 className="card-title text-white" style={{textAlign: "center"}}>How to Prepare For Your Talk</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                    <iframe className="embed-responsive" src="https://www.youtube.com/embed/NQR9gGVzOsA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                  </div>
                  <div className="col-md-6">
                    <p>
                      Deviant Ollam presented for ISUnlocked at DEF CON 25 to talk about how to prepare for your first talk and setup your presentation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-success" style={{textAlign: "center"}}>Articles &amp; Blogs</h2>
            <p><a href="http://snipe.net/2014/06/why-you-should-stop-stalling-and-start-presenting/" target="_blank">Why You Should Stop Stalling and Start Presenting</a> | Snipe</p>
            <p><a href="https://www.ashedryden.com/blog/what-you-need-to-know-about-speaking-at-conferences" target="_blank">What You Need To Know About Speaking at Conferences</a> | Ashe Dryden</p>
            <p><a href="https://www.youtube.com/watch?v=sfWAefKcV-w" target="_blank">DEFCON UNLOCKED: Panel about submitting to DEFON</a> | Tarah Wheeler</p>
            <p><a href="https://whitehatcheryl.wordpress.com/giving-a-talk-in-infosec/" target="_blank">Giving a Talk in InfoSec: Do That Thing That Scares You</a> | Cheryl Biswas</p>
            <p><a href="https://thesweetkat.com/blog/2016/10/23/the-building-blocks-of-infosec-cfps" target="_blank">The Building Blocks of InfoSec CFPs</a> | Kat Sweet</p>
            <p><a href="https://thesweetkat.com/blog/2016/3/16/getting-back-up" target="_blank">Getting Back Up: I Survived, and So Will You</a> | Kat Sweet</p>
            <p><a href="https://defcon.org/html/links/dc-speakerscorner.html#nikita-cfp" target="_blank">How Do I Make my CFP Stand Out?</a> | Nikita</p>
            <p><a href="https://www.helpnetsecurity.com/2016/03/30/how-to-get-your-talk-accepted-at-black-hat/" target="_blank">How To Get Your Talk Accepted at Black Hat</a> | Mirko Zorz</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Speakers;

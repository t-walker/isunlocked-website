import React, { Component } from 'react';
import TwitterHandle from '../components/TwitterHandle';

class PastEvents extends Component {
  render() {
    return (
      <div className="container">
        <div className="clearfix"></div>
        <div className="row">
          <div className="card border-info text-white mb-3">
            <div className="card-body">
              <div className="row">
                <div className="col-md-5">
                  <h5 className="card-title">LGBT Representation at InfoSec Conferences <br /><span class="badge badge-info">Panel</span></h5>
                  <br />
                  <p>
                    On Saturday, October 14th we hosted several members of the LGBT in security community
                    to talk about LGBT representation at conferences.
                  </p>
                  <p>
                    Moderator: Tyler Walker <TwitterHandle handle="airercode500" /><br /><br />
                    Emily <TwitterHandle handle="emilymaxima" /><br />
                    Avi <TwitterHandle handle="_llzes" /><br />
                    TProphet <TwitterHandle handle="TProphet" /><br />
                  </p>
                </div>
                <div className="col-md-7">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe title="LGBT Panel" src="https://www.youtube.com/embed/LzMNwUE1BXc" frameBorder="0" allowFullScreen></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="clearfix"></div>
        <div className="row">
          <div className="card border-info text-white mb-3">
            <div className="card-body">
              <div className="row">
                <div className="col-md-12">
                  <h5 className="card-title">InfoSec Unlocked University @ DEF CON 25 <br /><span class="badge badge-info">Workshop</span></h5>
                  <br />
                  <p>
                    At DEF CON 25, ISUnlocked hosted the first ISUniversity event. This event spanned most of the conference and was
                    designed to help new speakers get comfortable and excited about the process of submitting to CFPs and giving talks.

                    Here are some of the workshops we hosted:
                    <ul>
                      <li>How Do I Know If My Idea Is Good Enough?</li>
                      <li>CFP Preparation Breakouts</li>
                      <li>Slides And Jokes And Stage Fright OH MY: How To Prepare A Talk</li>
                      <li>Organizing And Running A Diverse Infosec Con</li>
                    </ul>                    
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="clearfix"></div>
        <div className="row">
          <div className="card border-info text-white card-info mb-3">
            <div className="card-body">
              <div className="row">
                <div className="col-md-5">
                  <h5 className="card-title">Diversity Organizations in Information Security <br /><span class="badge badge-info">Panel</span></h5>
                  <br />
                  <p>
                    On Wednesday, May 24th we hosted a live panel with organizers from several
                    diversity organizations that you might find at InfoSec conferences.
                  </p>
                  <p>
                    Moderator: Lisa Weeks <a href="https://twitter.com/XenoGirl" target="_blank" rel="noopener noreferrer">@XenoGirl</a><br /><br />
                    Women's Cyberjutsu: Elena Steinke<br />
                    ICMCP: Kate Shackford<br />
                    ICMCP: David Elcock <a href="https://twitter.com/devidelcock" target="_blank" rel="noopener noreferrer">@devidelcock</a><br />
                  </p>
                </div>
                <div className="col-md-7">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe src="https://www.youtube.com/embed/4jCyS0Czt58" frameBorder="0" allowFullScreen></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="clearfix"></div>
        <div className="row">
          <div className="card border-info text-white card-info mb-3">
            <div className="card-body">
              <div className="row">
                <div className="col-md-5">
                  <h5>Submit a CFP for Security Conferences <br /><span class="badge badge-info">Panel</span></h5>
                  <br />
                  <p>
                    On February 1st, 2017 we hosted a live panel with organizers from several different conferences to discuss Call for Papers (CFPs). Our panelists answered questions that were created by the ISUnlocked team as well as taking questions from
                    the audience.
                  </p>
                  <p>
                    Moderator: Ada Zebra <TwitterHandle handle="AdaZebra" /><br /><br />
                    BSIDES Boise: Sandy Dunn <TwitterHandle handle="subzer0girl" /><br /> 
                    DakotaCon: Kyle Cronin <TwitterHandle handle="Kyle_Cronin" /><br /> 
                    Circle City Con: Kat Sweet <TwitterHandle handle="TheSweetKat" /><br /> 
                    BSIDES NOVA: Meg Layton <TwitterHandle handle="vamegabyte" />
                  </p>
                </div>
                <div className="col-md-7">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe src="https://www.youtube.com/embed/9yp2azFIKRY" frameBorder="0" allowFullScreen></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PastEvents;

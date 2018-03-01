import React, { Component } from 'react';

class Mission extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Mission Statement</h1>

            <h3 className={"text-success"}>General Statement</h3>
            <h4>Opening doors for diverse voices in information security conferences</h4>
            <br />
            <h3 className={"text-success"}>Specific Aims</h3>
            <p>
              <ul style={{fontSize: "125%"}}>
                <li>Assist other diversity and inclusion related efforts at conferences</li>
                <li>Provide speakers the ability to have papers reviewed before submission</li>
                <li>Engage in discussions with conference organizers to promote inclusive policies</li>
                <li>Provide new speakers with resources that teach them how to successfully submit presentations to conferences</li>

              </ul>
            </p>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-success">Projects</h2>

            <h3 className="text-primary">CFP Review</h3>
            <p>
              Our board of CFP reviewers help new speakers through their first few CFPs.
              We hope to be the best resource for up and coming InfoSec speakers and hope to 
              create a network of talented and diverse speakers.
            </p>

            <h3 className="text-primary">Conference Lecture Events</h3>
            <p>
              InfoSec Unlock hosts talks and workshops at conferences to help new speakers get comfortable
              with the idea of speaking as well as equiping them with information on how to make a great talk.
              In 2017, we went to DEF CON and hosted the first ISUniversity speaker series where we hosted guest speakers
              and panelists to talk about speaking at conferences and submitting CFPs. 
            </p>

            <h3 className="text-primary">Conference Best Practices</h3>
            <p>
              Coming up with resources and information to help new and existing conferences to 
              become more inclusive. This includes things like: 
              <ul>
                <li>how to build a Code of Conduct</li>
                <li>how to handle sensitive incidents at your conference</li>
                <li>how to design your conference to be more attractive for underrepresented individuals</li>
              </ul> 
            </p>

            <h3 className="text-primary">Video Series</h3>
            <p>
              This will include the current videos on diversity in information security and infosec conferences 
              and a new upcoming series on how to approach call for papers. This new section will include 4-5 
              minute quick videos on how to brainstorm an idea, how to find the right conference, how to write a 
              technical paper, how to build a presentation and how to give a compelling talk.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Mission;

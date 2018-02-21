import React, { Component } from 'react';

class History extends Component {
  render() {
    return (
      <div className="container">
        <h1>History</h1>
        <h2 className="text-info">DEF CON Unlocked</h2>
        <p>
          After the 22nd annual DEFCON in August of 2014, Infosec Unlocked was born from an online event called “<a href="">DEF CON Unlocked</a>” on August 20th, 2014. 
          That day, Tarah Wheeler hosted a special event on her weekly video cast with Ryan “1o57" Clarke, Nikita Kronenberg (the DEF CON CFP chair), 
          Jon Callas, Tamzen Cannoy, Saender “Mouse” Clark, Brad “Renderman” Haines, and Luna Lindsey. Just after DEF CON 2014, awareness began growing 
          that few women or people of color had presented at major information security conferences that year, and Infosec Unlocked became a larger 
          organization as volunteers continued to step up.
        </p>

        <h2 className="text-info">Year 1</h2>
        <p>
          The first year that ISUnlocked was at DEFCON, they held a n00b welcome party for first time attendees, 
          hosted by AdaZebra, Tarah, and Tyler Walker. Tyler had joined ISUnlocked in the first month of the organization 
          and helped with party arrangements and the ISUnlocked website, eventually becoming the Lead Web Developer. At 
          this party, the first three members met Steve Christey Coley, an info sec veteran who had years of experience in 
          the info sec conference arena. Ada, Tyler, and Steve would eventually create the core of ISUnlocked, with Tarah as 
          an advisor and board member. During this event, the group also met Lisa Weeks, who has continued to advise the 
          organization with PR and advocacy.
        </p>

        <h2 className="text-info">ISUniversity</h2>
        <p>
          Infosec Unlocked became a larger organization as volunteers continued to step up, under the leadership of initial 
          volunteer and eventual executive director AdaZebra. In 2017, Infosec Unlocked hosted the largest n00b party at DEF 
          CON, providing a welcoming environment to new speakers and attendees alike, and continues to host online and in-person 
          events to help diverse speakers feel comfortable and mentored through the process of learning to speak onstage at 
          information security events.
        </p>
      </div>
    );
  }
}

export default History;

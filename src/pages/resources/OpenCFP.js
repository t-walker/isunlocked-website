import React, { Component } from 'react';

import axios from 'axios';

class OpenCFP extends Component {

  getOpenCFP() {
    axios.get('https://cfptime.org/api/cfps')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  componentDidMount() {
      this.getOpenCFP();
  }

  render() {
    return (
      <div className="container">
        
      </div>
    );
  }
}

export default OpenCFP;

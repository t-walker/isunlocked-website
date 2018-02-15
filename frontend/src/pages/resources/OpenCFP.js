import React, { Component } from 'react';

import axios from 'axios';

class OpenCFP extends Component {
  constructor() {
    super();

    this.state = {
      cfps: [],
      loading: true
    }
  }
  getOpenCFP() {
    axios.get('/api/v1/cfptime')
    .then((response) => {
      let state = this.state;
      state.cfps = response.data.cfps;
      state.loading = false;
      this.setState(state);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  componentWillMount() {
    this.getOpenCFP();
  }

  renderCFPRows() {
    let currentCfpRows = [];

    let oneMonthAhead = new Date();
    oneMonthAhead.setDate(oneMonthAhead.getDate() + 30);
    
    let twoWeeksAhead = new Date();
    twoWeeksAhead.setDate(oneMonthAhead.getDate() + 14);
    
    let oneWeekAhead = new Date();
    oneWeekAhead.setDate(oneWeekAhead.getDate() + 7);

    for (let i=0; i < this.state.cfps.length; i++) {
      let row = this.state.cfps[i];

      let cfp_deadline = new Date(row.cfp_deadline);
      let conf_start_date = new Date(row.conf_start_date);

      if (cfp_deadline > Date.now()) {
        let color = "";

        if (cfp_deadline > oneMonthAhead || cfp_deadline < oneMonthAhead) {
          color = "text-success";
        } 
        if (cfp_deadline < twoWeeksAhead) {
          color = "text-warning" 
        }
        if (cfp_deadline < oneWeekAhead) {
          color = "text-danger"
        }

        currentCfpRows.push(
          <tr key={i}>
            <td className={color}>{row.cfp_deadline !== null ? cfp_deadline.toDateString() : "Unspecified"}</td>
            <td><a href={row.website} target="_blank">{row.name}</a></td>
            <td>{row.conf_start_date !== null ? conf_start_date.toDateString() : "Unspecified"}</td>
            <td>{row.city}, {row.province}</td>
          </tr>
        )
      }
    }

    return currentCfpRows;
  }

  renderOpenCFPTable() {
    return (
      <table className="table table-hover table-striped">
      <thead className="bg-info">
        <tr>
        <th width="15%">CFP Deadline</th>
          <th width="40%">Conference</th>
          <th width="15%">Conference Date</th>
          <th width="15%">Location</th>
        </tr>
      </thead>
      <tbody>
        {this.renderCFPRows()}
      </tbody>
    </table>
    );
  }
  render() {

    if (this.state.loading) { 
      return ("Loading...");
    }


    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Open CFPs</h1>
            <p>The following conferences are still looking for speakers! This information is provided by <a href="https://twitter.com/cfp_time" target="_blank" rel="noopener noreferrer">@cfp_time</a>.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div style={{height: "400px", overflow: "scroll"}}>
                {this.renderOpenCFPTable()}
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default OpenCFP;

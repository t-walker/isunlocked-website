import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';
import Recaptcha from 'react-recaptcha';

class ReviewRegistration extends Component {
  state = {
  }

  constructor() {
      super(); 

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let target = event.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    let name = target.name; 

    this.setState({
        [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post('/api/v1/cfp-review-registration', this.state)
    .then((response) => {
      console.log(this.state);
    })
    .catch(function (error) {
      console.log(error);
    });  
  }


  render() {
    return (
      <div className="container">
        <div className="row">
            <div className="col-md-12">
                <h1>Register for CFP Review</h1>
                <p>
                    Complete this form and we will pair you with one of our ISUnlocked reviewers.
                </p>
            </div>
        </div>
        <div className="row mb-3">
            <div className="col-xl-6 col-md-12 col-sm-12">
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label className="form-label" for="text">What is your name?</Label>
                        <Input className="form-input" type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="your name (e.g. Jane Doe)"/>
                    </FormGroup>
                    <FormGroup>
                        <Label className="form-label" for="email">What is an email address we can contact you at?</Label>
                        <Input className="form-input" type="email" name="email"  value={this.state.email} onChange={this.handleChange} placeholder="name@example.com"/>
                    </FormGroup>
                    <FormGroup>
                        <Label className="form-label" for="topic">What topic would you like to write about?</Label>
                        <Input className="form-input" type="text" name="topic"  value={this.state.topic} onChange={this.handleChange} placeholder="(social engineering, networking, wireless, etc.)"/>
                    </FormGroup>
                    <FormGroup>
                        <Label className="form-label" for="progress">How far along in the process are you?</Label>
                        <Input className="form-input" type="select" name="progress" value={this.state.progress} onChange={this.handleChange}>
                            <option>Select One...</option>
                            <option>I have an idea</option>
                            <option>I have a conference chosen and know the requirements</option>
                            <option>I have part of a paper written</option>
                            <option>I have the CFP writen but would like someone to review it</option>
                            <option>I have submitted this paper before, I need help making it better.</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label className="form-label" for="conference">Which conference are you submitting to?</Label>
                        <Input className="form-input" type="text" name="conference" value={this.state.conference} onChange={this.handleChange} placeholder="(DEF CON, BSides, Black Hat, etc.)" />
                    </FormGroup>
                    <FormGroup>
                        <Label className="form-label" for="additional">Are there any other things you think we should know about your submission?</Label>
                        <Input className="form-input" type="textarea" name="additional"  value={this.state.additional} onChange={this.handleChange} />
                    </FormGroup>
                    <Button type="submit" className="btn-success col-md-12 col-lg-6 col-xl-4">Submit</Button>
                </Form>
            </div>
        </div>
      </div>
    );
  }
}

export default ReviewRegistration;

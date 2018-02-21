import React, { Component } from 'react';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class ReviewRegistration extends Component {
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
                <Form>
                    <FormGroup>
                        <Label className="form-label" for="text">What is your name?</Label>
                        <Input className="form-input" type="name" name="name" id="name" placeholder="your name (e.g. Jane Doe)"/>
                    </FormGroup>
                    <FormGroup>
                        <Label className="form-label" for="email">What is an email address we can contact you at?</Label>
                        <Input className="form-input" type="email" name="email" id="email" placeholder="name@example.com"/>
                    </FormGroup>
                    <FormGroup>
                        <Label className="form-label" for="topic">What topic would you like to write about?</Label>
                        <Input className="form-input" type="text" name="topic" id="topic" placeholder="(social engineering, networking, wireless, etc.)"/>
                    </FormGroup>
                    <FormGroup>
                        <Label className="form-label" for="progress">How far along in the process are you?</Label>
                        <Input className="form-input" type="select" name="progress" id="progress">
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
                        <Input className="form-input" type="text" name="conference" id="conference" placeholder="(DEF CON, BSides, Black Hat, etc.)" />
                    </FormGroup>
                    <FormGroup>
                        <Label className="form-label" for="additional">Are there any other things you think we should know about your submission?</Label>
                        <Input className="form-input" type="textarea" name="additional" id="additional" />
                    </FormGroup>
                    <Button className="btn-success">Submit</Button>
                </Form>
            </div>
        </div>
      </div>
    );
  }
}

export default ReviewRegistration;

import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div class="container">
            <div class="row">
                <div className="col-md-4">
                    <span className="muted"><strong>Resources</strong></span><br />
        
                    <span className="muted">
                        <a href="#">Code of Conduct</a><br />
                        <a href="/mission">Mission Statement</a><br />
                        <a href="/organization">Organization</a><br />
                    </span>
                    <hr />
                </div>
                <div className="col-md-4">
                    <span className="muted"><strong>Support our Mission</strong></span><br />
                    <span className="muted"><a href="https://www.paypal.com/donate/?token=NI23JOLKZbyqDCIkTXmg7qzJ7IsEcjiR3hqhIEF13CqtkUyWHwVJTq8eyV7hdCScINwOFW&country.x=US&locale.x=US">Donate</a> via PayPal <i class="fa fa-paypal"></i></span><br />
                    <span className="muted">
                        Follow us on <a href="https://www.twitter.com/isunlocked" target="_blank">Twitter <i class="fa fa-twitter"></i></a><br />
                        Follow us on <a href="https://www.linkedin.com/company/infosec-unlocked/" target="_blank">LinkedIn <i class="fa fa-linkedin"></i></a><br />
                    </span>
                    <hr />

                </div>
                <div className="col-md-4">
                    <span className="muted"><strong>Join Our Team</strong></span><br />
                    <span className="muted">If you're interested in joining our team please e-mail us:<br /></span>
                    <span className="muted"><a href="mailto:insecunlocked@gmail.com">insecunlocked@gmail.com</a></span>
                </div>
                <hr />

            </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

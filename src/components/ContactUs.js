import React, { Component } from 'react';

class ContactUs extends Component {
  render() {
    return (
      <div className="ui card" style={{ top: '100px' }}>
        <div className="content">
          <div className="header" style={{ color: '#da141e' }}>
            Contact Us
          </div>
        </div>
        <div className="content">
          <h4 className="ui sub header">Singh Electricals</h4>
          <div className="ui small feed">
            <div className="event">
              <div className="content">
                <div className="summary">Contcat No. - +91 8677931616</div>
              </div>
            </div>
            <div className="event">
              <div className="content">
                <div className="summary">
                  Email Id- singhelectrical@gmail.com
                </div>
              </div>
            </div>
            <div className="event">
              <div className="content">
                <div className="summary">
                  Address: Near Basawan Singh Stadium Hajipur, Vaishali, 844101
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="extra content">
          <button class="ui facebook button">
            <i className="facebook icon" />
            facebook
          </button>
          <button class="ui google plus button">
            <i class="google plus icon" />
            Google
          </button>
        </div>
      </div>
    );
  }
}

export default ContactUs;

import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="nav" style={{ position: 'fixed', bottom: 0 }}>
        <div className="nav-header">
          <div className="nav-title">&copy; Singh Electricals 2020</div>
        </div>
      </div>
    );
  }
}

export default Footer;

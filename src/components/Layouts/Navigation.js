import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    return (
      <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <div className="nav-title">Singh Electricals</div>
        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div className="nav-links">
          <a href="//github.io/jo_geek" target="_blank">
            About Us
          </a>
          <a href="http://stackoverflow.com/users/4084003/" target="_blank">
            Lighting
          </a>
          <a href="https://codepen.io/jo_Geek/" target="_blank">
            Wires & Cables
          </a>
          <a href="https://codepen.io/jo_Geek/" target="_blank">
            Switches & MCBS
          </a>
          <a href="https://codepen.io/jo_Geek/" target="_blank">
            Other Products
          </a>
          <a
            href="https://in.linkedin.com/in/jonesvinothjoseph"
            target="_blank"
          >
            Fans
          </a>

          <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank">
            Contact Us
          </a>
        </div>
      </div>
    );
  }
}

export default Navigation;

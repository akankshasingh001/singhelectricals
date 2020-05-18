import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <div className="nav-title">
            <div className="nav-links">
              <Link to="/">Singh Electricals</Link>
            </div>
          </div>
        </div>
        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <div className="nav-links">
          <Link to="/aboutUs">About Us</Link>
          <Link to="/lightings"> Lighting</Link>
          <Link to="/"> Fans</Link>
          <Link to="/"> Wires & Cables</Link>
          <Link to="/"> Switches & MCBS</Link>
          <Link to="/">Other Products</Link>
          <Link to="/contactUs">Contact Us</Link>
        </div>
      </div>
    );
  }
}

export default Navigation;

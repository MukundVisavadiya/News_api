import React, { Component } from "react";
import logo from "../breaking-news.png";

export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">
            <img
              className="image px-2"
              style={{ width: "92px", height: "80px" }}
              src={logo}
              alt="site-logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link" href="/">
                Home
              </a>
              <a className="nav-item nav-link" href="/">
                News
              </a>
              <a className="nav-item nav-link" href="/">
                About
              </a>
              <a className="nav-item nav-link" href="/">
                Contact
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;

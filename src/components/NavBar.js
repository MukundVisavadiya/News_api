import React, { Component } from "react";
import logo from "../breaking-news.png";
import { Link } from "react-router-dom";

export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            <img
              className="image px-2"
              style={{ width: "92px", height: "80px" }}
              src={logo}
              alt="site-logo"
            />
          </Link>
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
              <Link className="nav-item nav-link" to="/general">
                News
              </Link>
              <Link className="nav-item nav-link" to="/business">
                Business
              </Link>
              <Link className="nav-item nav-link" to="/entertainment">
                Entertainment
              </Link>
              <Link className="nav-item nav-link" to="/health">
                Health
              </Link>
              <Link className="nav-item nav-link" to="/science">
                Science
              </Link>
              <Link className="nav-item nav-link" to="/sports">
                Sports
              </Link>
              <Link className="nav-item nav-link" to="/technology">
                Technology
              </Link>

            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;

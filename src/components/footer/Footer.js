import React, { Component } from "react";
import "../../../node_modules/jquery/dist/jquery";
import "../../../node_modules/materialize-css/dist/js/materialize";
import { Link } from "react-router-dom";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <section className="section red darken-1 white-text center">
        <div className="row">
          <div className="col s12 center-align">
            <h4>Follow us</h4>
            <p>Check out our social media</p>
            <Link
              to="https://facebook.com"
              target="blank"
              className="white-text"
            >
              <i className="fab fa-facebook fa-3x"></i>
            </Link>
            <Link
              to="https://twitter.com"
              target="blank"
              className="white-text"
            >
              <i className="fab fa-twitter fa-3x"></i>
            </Link>
            <Link
              to="https://linkedin.com"
              target="blank"
              className="white-text"
            >
              <i className="fab fa-linkedin fa-3x"></i>
            </Link>
            <Link
              to="https://instagram.com"
              target="blank"
              className="white-text"
            >
              <i className="fab fa-instagram fa-3x"></i>
            </Link>
            <Link
              to="https://pinterest.com"
              target="blank"
              className="white-text"
            >
              <i className="fab fa-pinterest fa-3x"></i>
            </Link>
          </div>
          <div className="col s12 center-align white-text">
            Copyright<i className="tiny material-icons">copyright</i>2020
            Watchu,Inc
          </div>
        </div>
      </section>
    );
  }
}

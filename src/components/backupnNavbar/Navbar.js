import React, { Component } from "react";
import "../../../node_modules/materialize-css/dist/css/materialize.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
// import { Link } from "react-router-dom";
import SignIn from "../signin/SignIn";
// import Register from "../register/Register";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import Route from "react-router-dom/Route";
// import { Link } from "react-scroll";
const SmoothScroll = (props) => {
  return (
    <section id="home">
      <div className="navbar-fixed  ">
        <nav className="red">
          <div className="Container">
            <div className="nav-wrapper">
              <AnchorLink href="/home" className="brand-logo">
                WATCH U
              </AnchorLink>
              <AnchorLink
                href="#"
                data-target="mobile-demo"
                className="sidenav-trigger"
              >
                <i className="material-icons">menu</i>
              </AnchorLink>
              <ul className="right hide-on-med-and-down">
                <li>
                  <AnchorLink offset="100" href="/home">
                    Home
                  </AnchorLink>
                </li>
                <li>
                  <AnchorLink offset="100" href="/search">
                    Search
                  </AnchorLink>
                </li>
                <li>
                  <AnchorLink offset="100" href="/explore">
                    Problems
                  </AnchorLink>
                </li>
                <li>
                  <AnchorLink offset="100" href="/adventure">
                    Solution
                  </AnchorLink>
                </li>
                <li>
                  <AnchorLink offset="100" href="/contact">
                    Contact
                  </AnchorLink>
                </li>
                <Router>
                  <li>
                    <NavLink to="/signin">SignIn</NavLink>
                  </li>
                  <Route path="/signin" exact strict component={SignIn} />
                </Router>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <ul class="sidenav" id="mobile-demo">
        <li>
          <AnchorLink href="#home">Home</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#search">Search</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#explore">Problems</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#adventure">Solution</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#contact">Contact</AnchorLink>
        </li>
      </ul>
    </section>
  );
};
class Navbar extends Component {
  render() {
    return (
      <div>
        <SmoothScroll />
      </div>
    );
  }
}

export default Navbar;

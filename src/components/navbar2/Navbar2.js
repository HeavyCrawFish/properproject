import React, { Component } from "react";
import "../../../node_modules/materialize-css/dist/css/materialize.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
// import { Link } from "react-router-dom";
// import SignIn from "../signin/SignIn";
// import Register from "../register/Register";
// import { BrowserRouter as Router, NavLink } from "react-router-dom";
// import Route from "react-router-dom/Route";
import { Link } from "react-scroll";

class Navbar extends Component {
  render() {
    return (
      <section id="home">
        <div className="navbar-fixed  ">
          <nav className="red">
            <div className="Container">
              <div className="nav-wrapper">
                <AnchorLink href="/" className="brand-logo">
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
                    <Link
                      activeClass="active"
                      to="home"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="active"
                      to="search"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      Search
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="active"
                      to="explore"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      Explore
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="active"
                      to="adventure"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      Build
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="active"
                      to="team"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="active"
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      Contact
                    </Link>
                  </li>
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
  }
}

export default Navbar;

import React, { Component } from "react";
import "../../../node_modules/materialize-css/dist/css/materialize.min.css";
import Imgone from "../../images/apple.jpg";
import Imgtwo from "../../images/p2.jpg";
import Imgthree from "../../images/p3.jpg";
import { Link } from "react-scroll";
import "./Banner.css";

class Banner extends Component {
  render() {
    return (
      <section className="slider scrollspy" id="home">
        <ul className="slides">
          <li>
            <img src={Imgone} alt="Adruino" />
            <div className="caption left-align">
              <h2>The Ultimate Webcam</h2>
              <h5 className="dark white-text hide-on-small-only">
                you will find and the most compatible!!
              </h5>
              <Link
                activeClass="active"
                to="adventure"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="btn btn-large red"
              >
                Learn More
              </Link>
            </div>
          </li>
          <li>
            <img src={Imgtwo} alt="City" />
            <div className="caption center-align">
              <h2>Keep Watch</h2>
              <h5 className="dark white-text hide-on-small-only">
                over the places you want to protect!
              </h5>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="btn btn-large red"
              >
                How?
              </Link>
            </div>
          </li>
          <li>
            <img src={Imgthree} alt="Adruino" />
            <div className="caption right-align">
              <h2>Completely Coded</h2>
              <h5 className="dark white-text hide-on-small-only">
                and hardwired to keep safety!
              </h5>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="btn btn-large red"
              >
                Contact Us
              </Link>
            </div>
          </li>
        </ul>
      </section>
    );
  }
}
export default Banner;

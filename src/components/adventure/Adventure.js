import React, { Component } from "react";
import Build1 from "../../images/p4.jpg";
import Build2 from "../../images/p5.jpg";
import Build3 from "../../images/p6.jpg";
import { HashLink as Link } from "react-router-hash-link";
import "./Adventure.css";

export default class Adventure extends Component {
  render() {
    return (
      <section id="adventure" className="section section-adventure scrollspy">
        <div className="container">
          <div className="row">
            <h4 className="center">
              <span className="red-text darken-1">WatchU</span> Components
            </h4>
            <div className="col s12 m4">
              <div className="card">
                <div className="card-image">
                  <img class="nigga" src={Build1} alt="board" />
                  <span className="card-title">RaspBerry Pi</span>
                  <Link className="btn-floating activator halfway-fab waves-light red">
                    <i class="material-icons right">add</i>
                  </Link>
                </div>
                <div className="card-content">
                  <p>The heart of the project</p>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">
                    RaspBerry PI <i class="material-icons right">close</i>
                  </span>
                  <p>
                    This module is the heart o fthe project as it will act as
                    the mainframe of our project CAM. It will handle all the
                    processes of relaying and alarming.
                  </p>
                </div>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="card">
                <div className="card-image">
                  <img class="nigga" src={Build2} alt="board" />
                  <span className="card-title">Motion Sensor</span>
                  <Link className="btn-floating activator halfway-fab waves-light red">
                    <i class="material-icons right">add</i>
                  </Link>
                </div>
                <div className="card-content">
                  <p>It senses the movement.</p>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">
                    Motion Sensor<i class="material-icons right">close</i>
                  </span>
                  <p>
                    This will sense the movement around the configured area and
                    thus notify you of the action.Also it will activate the
                    camera for the ctaure and video relay.
                  </p>
                </div>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="card">
                <div className="card-image">
                  <img class="nigga" src={Build3} alt="board" />
                  <span className="card-title">RaspiCAM</span>
                  <Link className="btn-floating activator halfway-fab waves-light red">
                    <i class="material-icons right">add</i>
                  </Link>
                </div>
                <div className="card-content">
                  <p>Click! Click!</p>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">
                    RaspiCAM<i class="material-icons right">close</i>
                  </span>
                  <p>
                    The ultimate spy camera for keeping watch over your personal
                    things.This the high level camera attached to the Raspi
                    module which will activate when it detects any motion. It
                    will capture an image as well as relay the live feed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

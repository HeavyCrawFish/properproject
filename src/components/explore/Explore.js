import React, { Component } from "react";
import "../../../node_modules/materialize-css/dist/css/materialize.min.css";

export class Explore extends Component {
  render() {
    return (
      <section
        id="explore"
        className="section section-icons grey lighten-4 center scrollspy"
      >
        <div className="container">
          <div className="row">
            <h4 className="center">
              <span className="red-text darken-1">Explore</span> WatchU
            </h4>
            <div className="col s6 m3">
              <div className="card-panel">
                <span className="material-icons red-text">computer</span>
                <h4>Models</h4>
                <p>High Quality parts Used</p>
              </div>
            </div>
            <div className="col s6 m3">
              <div className="card-panel">
                <span className="material-icons red-text">code</span>
                <h4>Code</h4>
                <p>Fully coded and hardwired!</p>
              </div>
            </div>
            <div className="col s6 m3">
              <div className="card-panel">
                <span className="material-icons red-text">build</span>
                <h4>Build</h4>
                <p>NOOBS OS integrated</p>
              </div>
            </div>
            <div className="col s6 m3">
              <div className="card-panel">
                <span className="material-icons red-text">store</span>
                <h4>Book</h4>
                <p>A quality assured product.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Explore;

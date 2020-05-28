import React, { Component } from "react";
import person from "../../images/person.jpg";

class Team extends Component {
  render() {
    return (
      <section
        id="team"
        className="section section-team grey lighten-4 scrollspy"
      >
        <div className="container">
          <div className="row">
            <h4 className="center">
              <span className="red-text darken-1">WatchU</span> Team
            </h4>
            <div className="col s6 m3">
              <div className="card">
                <div className="card-image">
                  <img src={person} alt="person" />
                  <span className="card-title text-darken-4 black-text">
                    Vedant
                  </span>
                </div>

                <div className="card-content">
                  <p>The Team Leader</p>
                </div>
              </div>
            </div>
            <div className="col s6 m3">
              <div className="card">
                <div className="card-image">
                  <img src={person} alt="person" />
                  <span className="card-title text-darken-4 black-text">
                    Saurav
                  </span>
                </div>
                <div className="card-content">
                  <p>The Tank</p>
                </div>
              </div>
            </div>
            <div className="col s6 m3">
              <div className="card">
                <div className="card-image">
                  <img src={person} alt="person" />
                  <span className="card-title text-darken-4 black-text">
                    Vishnu
                  </span>
                </div>

                <div className="card-content">
                  <p>The Carry</p>
                </div>
              </div>
            </div>
            <div className="col s6 m3">
              <div className="card">
                <div className="card-image">
                  <img src={person} alt="person" />
                  <span className="card-title text-darken-4 black-text">
                    Shourya
                  </span>
                </div>

                <div className="card-content">
                  <p>The Team Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Team;

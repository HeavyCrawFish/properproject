import React, { Component } from 'react';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import './Booking.css';

export default class Booking extends Component {
    render() {
        return (
            <section className="section section-book red darken-2 white-text center scrollspy" id="booking">
                    <div className="container">
                        <div className="row">
                            <div className="col s12 center">
                                <a href="/src/Signin.js" className="btn btn-large waves-effect white red-text text-darken-3">
                                    <i className="material-icons right">send</i> Order now
                                </a>
                            </div>
                        </div>
                    </div>
            </section>
        )
    }
}

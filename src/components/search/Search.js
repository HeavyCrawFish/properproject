import React, { Component } from 'react';
import './Search.css';

export default class Search extends Component {
    render() {
        return (
            <section id="search" className="section section-search red  white-text center scrollspy">
                <div className="container">
                    <div className="col s12">
                        <div className="input-field">
                            <input className="white grey-text autocomplete" placeholder="Search for the anything you want to know" type="text" id="autocomplete-input" />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

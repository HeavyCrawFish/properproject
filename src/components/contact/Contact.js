import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", phone: "", message: "" };
  }

  handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, phone, message } = this.state;

    return (
      <section id="contact" className="section section-contact scrollspy">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <div className="card-panel red white-text center">
                <i className=" large material-icons">email</i>
                <h5>Where we At</h5>
                <p>You can find Us here!!</p>
              </div>
              <ul className="collection with-header">
                <li className="collection-header">
                  <h5>Main Office</h5>
                </li>
                <li className="collection-item">
                  <i class="fas fa-map-marker-alt"></i> kiit 2nd
                  floor,Odisha,India
                </li>
                <li className="collection-item">
                  <i class="fas fa-phone"> 123-456-7890</i>
                </li>
                <li className="collection-item">
                  <i class="fas fa-envelope"></i> mohanest45@gmail.com
                </li>
              </ul>
            </div>
            <div className="col s12 m6">
              <div className="card-panel grey lighten-3">
                <h5>Please fill out the form</h5>
                <form onSubmit={this.handleSubmit}>
                  <div className="input-field">
                    <input
                      type="text"
                      id="name"
                      value={name}
                      className="validate"
                    />
                    <label
                      for="name"
                      name="name"
                      className="red-text"
                      onChange={this.handleChange}
                    >
                      Name
                    </label>
                  </div>
                  <div className="input-field">
                    <input
                      type="text"
                      id="email"
                      value={email}
                      className="validate"
                    />
                    <label
                      for="email"
                      className="red-text"
                      onChange={this.handleChange}
                    >
                      E-mail
                    </label>
                  </div>
                  <div className="input-field">
                    <input
                      type="text"
                      id="phone"
                      value={phone}
                      className="validate"
                    />
                    <label
                      for="phone"
                      className="red-text"
                      onChange={this.handleChange}
                    >
                      Phone No.
                    </label>
                  </div>
                  <div className="input-field">
                    <input
                      type="text"
                      id="message"
                      value={message}
                      className="materialize-textarea"
                      data-length="120"
                    />
                    <label
                      for="message"
                      className="red-text"
                      onChange={this.handleChange}
                    >
                      Message
                    </label>
                  </div>
                  <button
                    class="btn waves-effect waves-light red"
                    type="submit"
                    name="action"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;

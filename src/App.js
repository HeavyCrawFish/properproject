import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Routes from "./components/routes/Routes";
// import Navbar from "./components/navbar/Navbar";
import Navbar2 from "./components/navbar2/Navbar2";
import Banner from "./components/banner/Banner";
import Search from "./components/search/Search";
import Explore from "./components/explore/Explore";
import Adventure from "./components/adventure/Adventure";
// import Gallery from './components/gallery/Gallery';
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Team from "./components/teams/Team";
// import SignIn from "./components/signin/SignIn";
// import Register from "./components/register/Register";
// import Booking from "./components/booking/Booking";
function App() {
  return (
    <Router>
      <Switch>
        <Route
          path="/properproject"
          exact
          strict
          render={() => {
            return (
              <Fragment>
                <Navbar2 />
                <Banner />
                <Search />
                <Explore />
                <Adventure />
                <Team />
                <Contact />
                <Footer />
              </Fragment>
            );
          }}
        />
      </Switch>
    </Router>
  );
}

export default App;

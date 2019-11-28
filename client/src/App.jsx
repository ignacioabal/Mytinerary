import React from "react";
import Home from "./components/home/Home";
import Login from "./components/users/Login";
import Register from "./components/users/Register";
import Cities from "./components/cities/Cities";
import { BrowserRouter, Route } from "react-router-dom";
import "./components/util/LandingPage.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/carousel";
import AvItineraries from "./components/itineraries/AvailableItineraries";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App container">
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/cities" exact component={Cities} />
          <Route path="/cities/barcelona" exact component={AvItineraries} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

// ----- REACT DEPENDENCIES
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

// ----- COMPONENTS
import Home from "./components/home/Home";
import Login from "./components/users/Login/Login";
import Register from "./components/users/Register/Register";
import Cities from "./components/cities/Cities";
import "./components/util/LandingPage.css";
import AvItineraries from "./components/itineraries/AvailableItineraries";

//------- BOOTSTRAP
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/carousel";
import "bootstrap/js/dist/collapse";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App container">
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/cities" exact component={Cities} />
          <Route
            path="/itineraries"
            component={AvItineraries}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

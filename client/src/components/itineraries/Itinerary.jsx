import React, { Component } from "react";
import Details from "./ItinDetails";
import "./itinerary.css";
import CityHeader from "./cityHeader/CityHeader";

import { connect } from "react-redux";
import fetchItineraries from "../../redux/actions/itineraryActions";

class Itinerary extends Component {
  componentDidMount() {
    let url = `http://localhost:5000${window.location.pathname}`;
    this.props.fetchItineraries(url);
  }


  renderList(elem) {
    return elem.map(itin => {
      return (
        <React.Fragment>

          <section key={itin._id}>
            <article id="itinerary" className="row">
              <div id="user" className="col">
                <img
                  src={require("../../img/defaultAvatar.png")}
                  alt="User Pic."
                  id="UserPic"
                />
                <p>{itin.user}</p>
              </div>
              <div id="details" className="col">
                <h3 id="title">{itin.name}</h3>
                <div id="info">
                  <ul className="nav">
                    <li className="nav-item" key="likes">
                      Likes: {itin.likes}
                    </li>
                    <li className="nav-item" key="Duration">
                      {itin.duration} Hours
                  </li>
                    <li className="nav-item" key="price">
                      ${itin.price}
                    </li>
                  </ul>
                </div>
                <div id="tags">
                  <ul className="nav">
                    {itin.tags.map(tag => (
                      <li key={tag}> #{tag} </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
            <Details compId={"itin" + itin._id} acts={itin.activities}></Details>
          </section>
        </React.Fragment>
      );
    });
  }

  render() {
    return (
      <React.Fragment>
        {this.props.itins.length > 0 ?
          (this.renderList(this.props.itins)
          ) : (
            <h1>Loading...</h1>
          )}
      </React.Fragment>
    );
  }
}

const mapStateProps = state => {
  return {
    itins: state.itineraryReducer.itins
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchItineraries: url => dispatch(fetchItineraries(url))
  };
};

export default connect(mapStateProps, mapDispatchToProps)(Itinerary);

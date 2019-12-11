import React, { Component } from "react";
import { connect } from "react-redux";
import FetchCities from "../../redux/actions/cityActions";
import Filter from "./CityFilter";
import { Link } from "react-router-dom";

class CityList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredCities: []
    };
  }

  componentDidMount() {
    this.props.fetchCities();
  }

  filterCities = cityFilter => {
    let filteredCities = this.props.cities;

    filteredCities = filteredCities.filter(city => {
      let fullName = city.name.toLowerCase() + city.country.toLowerCase();
      return fullName.indexOf(cityFilter.toLowerCase()) !== -1;
    });

    this.setState({
      filteredCities
    });
  };

  renderList(elem) {
    return elem.map(city => {
      return (
        <div className="card cities" key={city._id}>
          <div className="card-body">
            <h4>
              <Link to={"/cities/" + city.country + "/" + city.name}>
                {" "}
                {city.name} / {city.country}{" "}
              </Link>
            </h4>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <React.Fragment>
        <Filter onChange={this.filterCities}></Filter>
        {this.state.filteredCities.length > 0
          ? this.renderList(this.state.filteredCities)
          : this.renderList(this.props.cities)}
      </React.Fragment>
    );
  }
}

const mapStateProps = state => {
  return {
    cities: state.cityReducer.cities
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCities: () => dispatch(FetchCities())
  };
};
export default connect(mapStateProps, mapDispatchToProps)(CityList);

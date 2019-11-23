import React, { Component } from "react";
import { connect } from "react-redux";
import FetchCities from "../redux/actions/cityActions";
import Filter from "./CityFilter";
import { TIMEOUT } from "dns";
import { set } from "mongoose";

class CityList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredCities: []
    };
  }

  componentWillMount() {
    this.props.fetchCities();
    
    // while(this.state.filteredCities == null){
    //   this.setState({filteredCities: this.props.cities})
    // }
  }

  filterCities = cityFilter => {
    let filteredCities = this.props.cities;

    filteredCities = filteredCities.filter((city) => {
      let fullName = city.name.toLowerCase() + city.country.toLowerCase()
      return fullName.indexOf(
        cityFilter.toLowerCase()) !== -1
    });

    this.setState({
      filteredCities
    })
  };

  renderList(elem) {     
      // let cities = this.state.filteredCities;
      return elem.map(city => {
        return (
          <div className="card cities" key={city._id}>
            <div className="card-body">
              <h4>
                <a href="#">
                  {" "}
                  {city.name} / {city.country}{" "}
                </a>
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
        {this.state.filteredCities.length > 0 ? this.renderList(this.state.filteredCities) : this.renderList(this.props.cities)
  }
      </React.Fragment>
    );
  }
}

const mapStateProps = state => {
  //   console.log(state);

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

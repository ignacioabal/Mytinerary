import React, { Component } from "react";
import { connect } from "react-redux";
import FetchCities from "../redux/actions/cityActions";



class CityList extends Component {
  componentWillMount() {
    this.props.fetchCities();
  }

  renderList() {
    if (this.props.loading === true) {
      return <h1>Loading...</h1>;
    } else {
      return this.props.cities.map(city => {
        return (
          <div className="card cities" key={city._id}>
            <div className="card-body">
              <h4><a href="#"> {city.name} / {city.country} </a></h4>
            </div>
          </div>
        );
      });
    }
  }

  render() {
    let cities = this.props.cities;

    return (
        <React.Fragment>
           
            {this.renderList()}
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


import React, { Component } from 'react';
import CityList from './CityList';
import './Cities.css';
import './HomeButton';
import HomeButton from './HomeButton';

import { connect } from 'react-redux';
import updateEstado from '../actions/action';


class Cities extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         cities: []
    //     }
    // }



    render() {
        return (<React.Fragment>
            <CityList cities={this.props.cities}></CityList>
            <HomeButton></HomeButton>
        </ React.Fragment>);
    }

    componentDidMount() {
        this.fetchAPI();

    }


    // fetchAPI = () => {
    //     fetch('http://localhost:5000/cities/all')
    //         .then(resp => resp.json())
    //         .then(result => this.setState({ cities: result }))
    //         .catch(err => console.log(err));
    // };


}



const mapDispatchToProps = (dispatch) => {
    console.log(dispatch);

    return {
        updateEstado: (data) => dispatch(updateEstado(data))
    }

}

export default Cities;
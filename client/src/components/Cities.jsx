
import React, { Component } from 'react';
import CityList from './CityList';
import './Cities.css';
import './HomeButton';
import HomeButton from './HomeButton';


class Cities extends Component {
    constructor() {
        super();
        this.state = {
            cities: []
        }
    }



    render() {
        return (<React.Fragment>
            <CityList cities={this.state.cities}></CityList>
            <HomeButton></HomeButton>
        </ React.Fragment>);
    }

    componentDidMount() {
        this.fetchAPI();
    }


    fetchAPI = () => {
        fetch('http://localhost:5000/cities/all')
            .then(resp => resp.json())
            .then(result => this.setState({ cities: result }))
            .catch(err => console.log(err));
    };


}

export default Cities;
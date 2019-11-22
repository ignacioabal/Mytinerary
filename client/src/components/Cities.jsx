
import React, { Component } from 'react';
import CityList from './CityList';
import './Cities.css';
import './HomeButton';
import HomeButton from './HomeButton';


class Cities extends Component {
   


    render() {
        return (<React.Fragment>
            <CityList></CityList>
            <HomeButton></HomeButton>
        </ React.Fragment>);
    }



}


export default Cities;
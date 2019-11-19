
import React, { Component } from 'react';
import CityList from './CityList';
import './Cities.css';
import './HomeButton';
import HomeButton from './HomeButton';
// import {cityReducer } from '../reducer/reducer'
// import { connect } from 'react-redux';
// import { updateEstado } from '../actions/action';
// import {dispatch} from '.'

class Cities extends Component {
   


    render() {
        return (<React.Fragment>
            <CityList></CityList>
            <HomeButton></HomeButton>
        </ React.Fragment>);
    }

    componentDidMount() {
        // this.fetchAPI();

    }


    // fetchAPI = () => {
    //     fetch('http://localhost:5000/cities/all')
    //         .then(resp => resp.json())
    //         .then(result => dispatch(cityReducer))
    //         .catch(err => console.log(err));
    // };


}



// const mapStateProps = state => {
//     console.log(state);

//     return {
//         city: state.cityReducer.city
//     }

// }

// const mapDispatchToProps = (dispatch) => {
//     console.log(dispatch);

//     return {
//         updateEstado: (data) => dispatch(updateEstado(data))
//     }

// }

export default Cities;
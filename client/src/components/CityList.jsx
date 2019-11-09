import React from 'react';
import { connect } from 'react-redux';


const CityList = ({ prop.cities }) => prop.cities.map(city =>



    <div className="card">
        <img src={city.img} alt="" className="card img tot" />
        <div className="card-body">
            {city.name}
        </div>
    </div>







);

/* <li key={city._id}> {city.name} </li> */

// const CityList = props => {
//     let cities = props.cities;
//     console.log(cities);

//     return (

//     )
// }



const mapStateProps = state => {
    console.log(state);

    return {
        city: state.cityReducer.city
    }

}

export default connect(mapStateProps)(CityList);
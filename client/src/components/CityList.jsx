import React from 'react';
// import './Cit.css';


const CityList = ({ cities }) => cities.map(city =>



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




export default CityList;
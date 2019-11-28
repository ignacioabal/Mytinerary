import React, { Component } from 'react';
import Details from './ItinDetails';
import './itinerary.css';


export default class Itinerary extends Component {
    render() {
        return (
            <section>
            <article id="itinerary" className="row">
                <div id="user" className="col">
                    <img src={require("../../img/defaultAvatar.png")} alt="User Pic." id="UserPic"/>
                    <p>GaudiLover</p>
                </div>
                <div id="details" className="col">
                    <h3 id="title">Gaudi In A Day</h3>
                    <div id="info">
                        <ul className="nav">
                            <li className="nav-item">
                                Likes: 34
                            </li>
                            <li className="nav-item">12 Hours</li>
                            <li className="nav-item">$$</li>
                        </ul>
                    </div>
                    <div id="tags">
                        <ul className="nav">
                            <li className="nav-item">#art</li>
                            <li className="nav-item">#architecture</li>
                        </ul>
                    </div>
                </div>
                
            </article>
            <Details></Details>
            </section>
        )
    }
}

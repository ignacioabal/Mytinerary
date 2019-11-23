import React from 'react';
import './Carousel.css';

export default class Carousel extends React.Component {
    render() {
        return (
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>

                </ol>
                <div className="carousel-inner container">
                    <div className="carousel-item active">
                        <div className="row">
                            <div className="col ">


                                <img src="https://www.moneycrashers.com/wp-content/uploads/2017/03/best-affordable-cities-live-renters-1068x713.jpg" className="CarImg d-block w-100" alt="..." />
                                <h5><span className="text-center">[City]</span></h5>


                                <img src="https://www.moneycrashers.com/wp-content/uploads/2017/03/best-affordable-cities-live-renters-1068x713.jpg" className="CarImg d-block w-100" alt="..." />
                                <h5><span className="text-center">[City]</span></h5>
                            </div>
                            <div className="col">
                                <img src="https://www.moneycrashers.com/wp-content/uploads/2017/03/best-affordable-cities-live-renters-1068x713.jpg" className="CarImg d-block w-100" alt="..." />
                                <h5><span className="text-center">[City]</span></h5>
                                <img src="https://www.moneycrashers.com/wp-content/uploads/2017/03/best-affordable-cities-live-renters-1068x713.jpg" className="CarImg d-block w-100" alt="..." />
                                <h5><span className="text-center">[City]</span></h5>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row">
                            <div className="col ">
                                <img src="https://www.moneycrashers.com/wp-content/uploads/2017/03/best-affordable-cities-live-renters-1068x713.jpg" className="CarImg d-block w-100" alt="..." />
                                <h5><span className="text-center">[City]</span></h5>

                                <img src="https://www.moneycrashers.com/wp-content/uploads/2017/03/best-affordable-cities-live-renters-1068x713.jpg" className="CarImg d-block w-100" alt="..." />
                                <h5><span className="text-center">[City]</span></h5>
                            </div>
                            <div className="col">
                                <img src="https://www.moneycrashers.com/wp-content/uploads/2017/03/best-affordable-cities-live-renters-1068x713.jpg" className="CarImg d-block w-100" alt="..." />
                                <h5><span className="text-center">[City]</span></h5>

                                <img src="https://www.moneycrashers.com/wp-content/uploads/2017/03/best-affordable-cities-live-renters-1068x713.jpg" className="CarImg d-block w-100" alt="..." />
                                <h5><span className="text-center">[City]</span></h5>
                            </div>
                        </div>
                    </div>

                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div >
        );
    }
}
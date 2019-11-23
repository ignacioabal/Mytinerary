import React from 'react';
import ImgButton from '../util/ImgButton';
import Carousel from '../util/Carousel'

class Home extends React.Component {
    render() {
        return (
            <main>
                <p>
                    Find your perfect trip, designed bt insiders who know and love their cities.
            </p>
                <h2>Start browsing</h2>
                <ImgButton href="/cities" img={require("../../img/right_arrow.png")} className="GoArrow"></ImgButton>
                <p>Popular MYtineraries</p>

                <Carousel />

            </main >

        );
    }
}

export default Home;














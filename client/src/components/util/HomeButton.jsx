import React, { Component } from 'react';
import ImgButton from './ImgButton';

export default class HomeButton extends Component {
    render() {
        return <ImgButton href="/" img={require('../../img/homeIcon.png')} className="homebtn" ></ImgButton>
    }
}
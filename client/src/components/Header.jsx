import React from 'react';
import Avatar from './Avatar.jsx';
import NavButton from './NavButton';
import './Header.css';


const Header = () => {
    return (
        <header>
            <Avatar img={require("../img/defaultAvatar.png")} divClass="DefAvatar dropdown"></Avatar>
            <NavButton ></NavButton>
            <img src={require("../img/MYtineraryLogo.png")} className="App-logo" alt="MYtinerary logo"></img>
        </header>
    );
}

export default Header;
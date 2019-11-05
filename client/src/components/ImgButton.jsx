import React from 'react';
import { Link } from 'react-router-dom';





class ImgButton extends React.Component {
    render() {
        return (
            <div className={this.props.divClass}>
                <Link to={this.props.href}>
                    <img src={this.props.img} className={this.props.className} alt={this.props.className}></img>
                </Link>
            </div>
        );
    }
}


export default ImgButton;
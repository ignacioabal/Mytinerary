import React from 'react';
import { Link } from 'react-router-dom';




export default class Avatar extends React.Component {

    render() {
        return (
            <div className="DefAvatar dropdown">
                <div className="btn-group dropright">
                    <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src={this.props.img} alt={this.props.name} className="img-fluid" />
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <Link className="dropdown-item" to="/register">Create User</Link>
                        <Link className="dropdown-item" to="/login">Log in</Link>
                    </div>
                </div>
            </div>
        );
    }
    // }                    
}
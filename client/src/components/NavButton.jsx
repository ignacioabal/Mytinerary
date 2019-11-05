import React from 'react';
import './NavButton.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

export default class NavButton extends React.Component {
    render() {
        return (
            <nav className="nav dropdown navbar-light">
                <div className="btn-group dropright">
                    <button className="btn dropdown-toggler" type="button" data-toggle="dropdown" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="dropdown-menu">
                        <Link className="dropdown-item" to="/" >Home</Link>
                        <Link className="dropdown-item" to="/cities" >Cities</Link>
                    </div>
                </div>
            </nav>
        );
    }
}
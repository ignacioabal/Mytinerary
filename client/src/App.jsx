import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Cities from './components/Cities'
import { BrowserRouter, Route } from 'react-router-dom';
import './components/LandingPage.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/dist/dropdown'; import 'bootstrap/js/dist/carousel';



class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App container">
                    <Header />

                    <Route path="/" exact component={Home} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/register" exact component={Register} />
                    <Route path="/cities" exact component={Cities} />

                </div>
            </BrowserRouter>
        );
    }
}

export default App;

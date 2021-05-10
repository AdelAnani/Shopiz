import React from 'react';

import { Link } from 'react-router-dom';

import logo from "../assets/logo.svg";
import './home.css';

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <div className="home_container_logo">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div className="home_container_title">
                    <p>Welcome to SHOPIZ</p>
                </div>
                <div className="home_container_footer">
                    <p className="home_container_footer_text">The first movie awards for entrepreneurs. Nominate your favourites movies.</p>
                    <Link to="/search" className="home_container_footer_button">GET STARTED</Link>
                </div>
            </div>
        </div>
    );
}

export default Home;

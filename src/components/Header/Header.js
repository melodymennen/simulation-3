import React from 'react';
import home from '../../images/home.png';
import search from '../../images/search.png';
import { Link } from 'react-router-dom';
import './Header.css';

// Simulation-3 38C
const Header = (props) => {
    return (
        <div className="header">
            <div className="inner-div" >
                <div className="header-logo">
                    Helo
                    <Link to="/"><img src={home} className="icons"/></Link>
                    <Link to="/search"><img src={search} className="icons"/></Link>
                </div>
                <div className="page">{props.page}</div>
                <Link to="/login"className="logout">Logout</Link>
            </div>
        </div>
    );
};

export default Header;
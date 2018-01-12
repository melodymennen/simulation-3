import React from 'react';
import home from '../../images/home.png';
import search from '../../images/search.png';
import './Header.css';

const Header = (props) => {
    return (
        <div className="header">
            <div className="inner-div" >
                <div className="header-logo">
                    Helo
                    <img src={home} className="icons"/>
                    <img src={search} className="icons"/>
                </div>
                <div className="page">{props.page}</div>
                <div className="logout">Logout</div>
            </div>
        </div>
    );
};

export default Header;
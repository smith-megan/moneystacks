import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/index.css';
import '../styles/header.css';

class Header extends React.Component {
    render() {
        return (
            <div className="header-div">
                <ul>
                    <Link to='/stacks'>
                        <button className='header-button'>Stacks</button>
                    </Link>
                    <Link to='/history'>
                        <button className='header-button'>History</button>
                    </Link>
                    <Link to="/graphs">
                        <button className='header-button'>Graphs</button>
                    </Link>
                    <Link to='/login'>
                        <button className='header-button'>Login</button>
                    </Link>
                </ul>
            </div>
        )
    }
}

export default Header;
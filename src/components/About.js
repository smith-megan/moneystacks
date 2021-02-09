import React, { Component } from 'react';
import "../styles/index.css";
import '../styles/about.css';
import moneypile from '../assets/moneystack.png';

class About extends React.Component {
    render() {
        return (
            <div className="home-page">
                <div className='left'>
                    <h1 className='title'>MoneyStacks</h1>
                    <p className='title-text'>Visual motivate to save money. Set a goal amount, whether it is  an emergency fund or the cost of that new game, gadget, or car, and stack money towards it.</p>
                    <p className='title-text'>Start building good habits, watch your history and graphs to see if you are on track.</p>
                    <p className='title-text'>Celebrate and start a new stack when you reach your goal.</p>
                    <button className='title-button'>Start Stacking</button>
                </div>
                <div className='right'>
                    <img src={moneypile} id="cashstack" alt="stacks of cash"></img>
                </div>
            </div>
        )
    }
}

export default About
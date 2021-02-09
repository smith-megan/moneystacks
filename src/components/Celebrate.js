import React, { Component } from 'react';
import '../styles/index.css'

class Celebrate extends React.Component {
    render() {
        if (this.props.celeb === true) {
            return (<div id='celebration'>
                <div className='red'></div>
                <div className='blue'></div>
                <div className='yellow'></div>
                <div className='purple'></div>
                <div className='green'></div>
                <div className='pink'></div>
                <div className='orange'></div>
                <div className='sky'></div>
            </div>)
        } else {
            return (<div></div>)
        }
    }
}

export default Celebrate;
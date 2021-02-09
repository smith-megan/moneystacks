import React, { Component } from 'react';
import '../styles/index.css'

class HistoryPopUp extends React.Component {
    render() {
        if (this.props.historytoggle === true) {
            return (
                <div className="additionpopup">
                    <h2>History</h2>
                    <p>Date | Amount</p>
                    {this.props.history.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))}
                    <button id="exitY" onClick={() => {
                        this.props.toggleHistoryOff();
                    }
                    }>Done</button>
                </div>
            );
        } else { return (null); }
    }
}

export default HistoryPopUp;
import React, { Component } from 'react';
import '../styles/index.css'

class Subtraction extends React.Component {
    render() {
        if (this.props.subtraction === true) {
            return (
                <div className="additionpopup">
                    <h2>Update Your Cash</h2>
                    <form id="subtractionform">
                        <p>Date</p>
                        <input onChange={(e) => { this.props.updateMyDate(e) }} placeholder="Aug. 13"></input>
                        <p>$ Amount to Subtract</p>
                        <input onChange={(e) => { this.props.updateMyAmount(-1, e) }} placeholder="0.00"></input>
                        <br></br>
                        <br></br>
                        <button type="button" onClick={(e) => {
                            this.props.captureData(e);
                            document.forms["subtractionform"].reset();
                        }}>+ Money Stack</button>
                    </form>
                    <br></br>
                    <button id="exitX" onClick={() => {
                        this.props.toggleSubtractionOff();
                        this.props.percentChange();
                        document.forms["subtractionform"].reset();
                        this.props.goalMet();
                    }
                    }>Done</button>
                </div>
            );
        } else { return (null); }
    }
}

export default Subtraction;
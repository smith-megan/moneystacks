import React, { Component } from 'react';
import '../styles/index.css'

class Addition extends React.Component {
    render() {
        if (this.props.addition === true) {
            return (
                <div className="additionpopup">
                    <h2>Update Your Cash</h2>
                    <form id="additionform">
                        <p>Date</p>
                        <input onChange={(e) => { this.props.updateMyDate(e) }} placeholder="Aug. 13"></input>
                        <p>$ Amount to Add</p>
                        <input onChange={(e) => { this.props.updateMyAmount(1, e) }} placeholder="0.00"></input>
                        <br></br>
                        <br></br>
                        <button type="button" onClick={(e) => {
                            this.props.captureData(e);
                            document.forms["additionform"].reset();
                        }}>+ Money Stack</button>
                    </form>
                    <br></br>
                    <button id="exitX" onClick={() => {
                        this.props.toggleAdditionOff();
                        this.props.percentChange();
                        document.forms["additionform"].reset();
                        this.props.goalMet();
                    }
                    }>Done</button>
                </div>
            );
        } else { return (null); }
    }
}

export default Addition;
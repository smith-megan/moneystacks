import React, { Component } from 'react';
import '../styles/index.css'

class Goal extends React.Component {
    render() {
        if (this.props.goaltoggle === true) {
            return (
                <div id="setgoal">
                    <p>{'$ '}   <input id="goalamountbox" placeholder="Goal Amount" onChange={(e) => {
                        this.props.updateMyGoal(e)
                    }}>
                    </input>
                    </p>
                    <button id='set'
                        onClick={() => {
                            if (this.props.goal > 0) {
                                this.props.startGoalDisplay();
                                this.props.percentChange();
                            }
                        }}>set</button>
                </div>
            )
        } else { return (<p id="thegoalnumber">${this.props.goal}</p>) }
    }
}

export default Goal;
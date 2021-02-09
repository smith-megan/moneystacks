import React from 'react';
import banner from './assets/banner.png';
import money from './assets/moneystack.jpg';

import Celebrate from './components/Celebrate';
import Addition from './components/Addition';
import Subtraction from './components/Subtraction';
import HistoryPopUp from './components/HistoryPopUp';
import Goal from './components/Goal';

import './styles/index.css';
import './styles/stacks.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            goal: 0,
            current: 0,
            percentcomplete: 0,
            history: [],
            celebration: false,
            addition: false,
            subtraction: false,
            goaltoggle: true,
            historytoggle: false,
            date: '',
            amount: 0
        };
        this.percentChange = this.percentChange.bind(this)
    }

    //div growing math

    percentChange = () => {
        let goal = parseFloat(this.state.goal);
        let current = parseFloat(this.state.current);
        let newpercent = ((current / goal) * 100);
        this.setState({ percentcomplete: newpercent });
    }

    ///every amount update

    captureData = (e) => {
        //take date+amount and push into this.state.history
        if (this.state.date !== '' && this.state.amount !== 0) {
            this.setState({ history: [...this.state.history, [this.state.date + " ", this.state.amount]] });

            //set new current amount
            let hold = 0
            hold += parseFloat(this.state.current) + parseFloat(this.state.amount);
            this.setState({ current: (hold) });

            //reset state
            this.setState({ date: '' });
            this.setState({ amount: 0 });

            e.target.value = ''
            //no goal set yet!
            if (this.state.goal <= 0) {
                alert('no goal set!');
            }
            return
        } else { return alert("set date and amount") }
    }

    //toggles

    toggleAdditionOn = () => {
        this.setState({ addition: true });
        this.setState({ subtraction: false });
    }
    toggleAdditionOff = () => {
        this.setState({ addition: false })
    }
    toggleSubtractionOn = () => {
        this.setState({ subtraction: true });
        this.setState({ addition: false });
    }
    toggleSubtractionOff = () => {
        this.setState({ subtraction: false })
    }
    toggleGoalOff = () => {
        this.setState({ goaltoggle: false })
    }
    toggleGoalOn = () => {
        this.setState({ goaltoggle: true })
    }

    toggleHistoryOn = () => {
        this.setState({ historytoggle: true })
    }

    toggleHistoryOff = () => {
        this.setState({ historytoggle: false })
    }

    startGoalDisplay = () => {
        this.setState({ goaltoggle: false });

    }

    goalMet = () => {
        if (this.state.goal !== 0 && this.state.goal <= this.state.current) {
            this.setState({ celebration: true })
            return null
        }
        if (this.state.goal > this.state.current) {
            this.setState({ celebration: false })
        }
    }

    //update states with use input

    updateMyDate = (e) => {
        this.setState({ date: (e.target.value) });
    }
    updateMyAmount = (i, e) => {
        this.setState({ amount: (i * e.target.value) });
    }
    updateMyGoal = (e) => {
        this.setState({ goal: (e.target.value) });
    }

    render() {
        return (
            <div>
                <div className="main">

                    <div className="goal-title">
                        <img className="goal-banner" src={banner} alt="Goal banner" />
                    </div>

                    <div id="goalnumber">{
                        <Goal
                            goaltoggle={this.state.goaltoggle}
                            updateMyGoal={this.updateMyGoal}
                            startGoalDisplay={this.startGoalDisplay}
                            percentChange={this.percentChange}
                            goal={this.state.goal}
                        />
                    }</div>

                    <div id="percentEmpty">

                        <div id="percentComplete"
                            style={{ height: (this.state.percentcomplete + "%") }}
                        >
                            <img id="cashstack" src={money} alt="cash stack"
                            ></img>
                        </div>
                    </div>

                    <div id="white">
                        <p id="currentstate">Current Amount: ${this.state.current}</p>

                        <div id='history'>
                            <button type="button" onClick={() => {
                                this.toggleHistoryOn();
                            }}>History</button>
                        </div>
                    </div>

                    <div id="buttons">
                        <button id="add" onClick={() => {
                            this.toggleAdditionOn();
                        }}> + </button>

                        <button id="sub" onClick={() => {
                            this.toggleSubtractionOn();
                        }}> - </button>
                    </div>

                    <Addition
                        addition={this.state.addition}
                        updateMyAmount={this.updateMyAmount}
                        updateMyDate={this.updateMyDate}
                        captureData={this.captureData}
                        toggleAdditionOff={this.toggleAdditionOff}
                        percentChange={this.percentChange}
                        goalMet={this.goalMet}
                    />

                    <Subtraction
                        subtraction={this.state.subtraction}
                        updateMyAmount={this.updateMyAmount}
                        updateMyDate={this.updateMyDate}
                        captureData={this.captureData}
                        toggleSubtractionOff={this.toggleSubtractionOff}
                        percentChange={this.percentChange}
                        goalMet={this.goalMet}
                    />

                    <HistoryPopUp
                        historytoggle={this.state.historytoggle}
                        toggleHistoryOff={this.toggleHistoryOff}
                        history={this.state.history}
                    />
                </div >

                <Celebrate
                    celeb={this.state.celebration}
                    updateAmount={this.updateMyAmount}
                />

            </div>
        );
    }
}


export default Home
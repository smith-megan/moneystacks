import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import About from './components/About';
import Home from './Home';
import History from './components/History';
import Graphs from './components/Graphs';



class MoneyStack extends Component {
  render() {
    return (
      <Router>
        <div className='home-page-div'>
          <Header />
          <Route path="/stacks" exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/History' component={History} />
          <Route path='/Graphs' component={Graphs} />
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<MoneyStack />, document.getElementById("root"));
import React, { Component } from 'react';
import logo from './logo.svg';
import Resume from './components/Resume'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Work from './components/Work'
import Contact from './components/Contact'

import { BrowserRouter as Router, Route,Switch, Link } from "react-router-dom";
// import { browserHistory } from 'react-router'
class App extends Component {
  render() {
    return (
      //'hi'
      <Router>
        <Switch>
        <Route exact path="/" component={Resume} />
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skills} />
         <Route path="/experience" component={Experience} />
        <Route path="/education" component={Education} />
        <Route path="/work" component={Work} />
        <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    );
  }
}

export default App;

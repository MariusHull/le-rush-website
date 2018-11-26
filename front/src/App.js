import React, { Component } from 'react';
import './App.css';
import Inscription from './Inscription.js'
import Home from './Home.js'
import Contacts from './Contacts.js'
import Navbar from './Navbar.js'
import Footer from './Footer.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Route exact path="/" component={Home} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/inscription" component={Inscription} />
          <Footer/>
    </div>
  </Router>
    );
  }
}





export default App;

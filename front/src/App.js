import React, { Component } from 'react';
import './App.css';
import InscriptionDoc from './inscriptiondoc.js'
import Home from './Home.js'
import Contacts from './Contacts.js'
import Navbar from './Navbar.js'
import Footer from './Footer.js'
import Membre from './Membre'
import Confirm from './Confirmation'
import Edition2019 from './Edition2019'
import Acces from "./Acces.js"
import Partenaires from "./Partenaire.js"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";




class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Route exact path="/" component={Home} />
          <Route path="/deroulement" component={Edition2019} />
          <Route path="/inscription" component={InscriptionDoc} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/membre" component={Membre} />
          <Route path="/confirm" component={Confirm} />
          <Route path="/acces" component={Acces} />
          <Route path="/partenaires" component={Partenaires} />

          <Footer/>
        </div>
      </Router>
    );
  }
}





export default App;

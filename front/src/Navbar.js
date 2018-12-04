import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";



class Navbar extends Component {
    render() {
      return (
       

    <div>
      <nav className="black" role="navigation">
          <div className="nav-wrapper container">
            <a href="/" id="logo-container"  className="brand-logo"><img src="./IMGLeRushLogo.png" alt="Icone Rush" width="10%" height="10%" align="center"/>Le Rush</a>
            
            <ul className="right hide-on-med-and-down">
              <li><Link to="/ed2019">Edition 2019</Link></li>
              <li><Link to="/inscription">S'inscrire</Link></li>
              <li><Link to="/contacts">Contact</Link></li>
            </ul>
      
            <ul id="nav-mobile" className="sidenav">
              <li><a href="/">Accueil</a></li>
              <li><Link to="/ed2019">Edition 2019</Link></li>
              <li><Link to="/inscription">S'inscrire</Link></li>
              <li><Link to="/contacts">Contact</Link></li>
            </ul>
            <a href="" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          </div>
      </nav>
    </div>
    )
    }
}
    

        
      
export default Navbar;
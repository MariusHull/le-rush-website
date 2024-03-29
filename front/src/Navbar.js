import React, { Component } from 'react';
import { Link } from "react-router-dom";



class Navbar extends Component {
    render() {
      return (
       

    <div>
      <nav className="black" role="navigation">
          <div className="nav-wrapper container">
            <a href="/" id="logo-container hide-on-med-and-down" height="10%" width="10%" className="brand-logo">Le Rush</a>
            
            <ul className="right hide-on-med-and-down">
              <li><Link to="/deroulement">Déroulement</Link></li>
              <li><Link to="/inscription">Inscription</Link></li>
              <li><Link to="/contacts">Contact</Link></li>
              <li><Link to="/acces">Accès</Link></li>
              <li><Link to="/partenaires">Partenaires</Link></li>
            </ul>
      
            <ul id="nav-mobile" className="sidenav">
              <li><a className="blackFill" href="/">Accueil</a></li>
              <li><a className="blackFill" href="/deroulement">Déroulement</a></li>
              <li><a className="blackFill" href="/inscription">Inscription</a></li>
              <li><a className="blackFill" href="/contacts">Contact</a></li>
              <li><a className="blackFill" href="/acces">Accès</a></li>
              <li><a className="blackFill" href="/partenaires">Partenaires</a></li>
            </ul>
            <a href="" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          </div>
      </nav>
    </div>
    )
    }
}
    

        
      
export default Navbar;
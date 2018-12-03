import React, { Component } from 'react';
import { Link } from "react-router-dom";



class Navbar extends Component {
    render() {
      return (
       

    <div>
      <nav class="black" role="navigation">
          <div class="nav-wrapper container">
            <Link to="/" id="logo-container"  className="brand-logo"><img src="./IMGLeRushLogo.png" alt="Icone Rush" width="10%" height="10%" align="center"/>Le Rush</Link>
            <ul className="right hide-on-med-and-down">
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/inscription">S'inscrire</Link></li>
              <li><Link to="/contacts">Contact</Link></li>

            </ul>
      
            <ul id="nav-mobile" class="sidenav">
              <li><Link to="/inscription">S'inscrire</Link></li>
              <li><Link to="/contacts">Contact</Link></li>
            </ul>
            <a href="" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          </div>
      </nav>
    </div>
    )
    }
}
    

        
      
export default Navbar;
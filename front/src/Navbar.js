import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



class Navbar extends Component {
    render() {
      return (
       

    <div>
      <nav class="black" role="navigation">
          <div class="nav-wrapper container">
            <Link to="/" id="logo-container"  class="brand-logo"><img src="./IMGLeRushLogo.png" alt="Icone Rush" width="10%" height="10%" align="center"/>Le Rush</Link>
            <ul class="right hide-on-med-and-down">
              <li><a href="#">Edition 2019</a></li>
              <li><Link to="/inscription">S'inscrire</Link></li>
              <li><a href="#">Les éditions précédentes</a></li>
              <li><Link to="/contacts">Contact</Link></li>

            </ul>
      
            <ul id="nav-mobile" class="sidenav">
              <li><a href="#">Edition 2019</a></li>
              <li><a href="#">S'inscrire</a></li>
              <li><a href="#">Les éditions précédentes</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
            <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          </div>
      </nav>
    </div>
    )
    }
}
    

        
      
export default Navbar;
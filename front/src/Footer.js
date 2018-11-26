import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



class Footer extends Component {
    render() {
      return (
       

    <div>
      <footer class="page-footer teal">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">L'équipe organisatrice</h5>
                <p class="grey-text text-lighten-4">Tous membres de l'association audiovisuelle Hyris, 
                  nous sommes heureuxs de reprendre l'organisation de ce festival, 
                  pour en faire avec vous un événement execptionnel.
                </p>
              </div>

              <div class="col l3 s12">
                <h5 class="white-text">Settings</h5>
                <ul>
                  <li><a class="white-text" href="#!">Link 1</a></li>
                  <li><a class="white-text" href="#!">Link 2</a></li>
                  <li><a class="white-text" href="#!">Link 3</a></li>
                  <li><a class="white-text" href="#!">Link 4</a></li>
                </ul>
              </div>
          

              <div class="col l3 s12">
                <h5 class="white-text">Nous contacter : </h5>
                <ul>
                  <li><a class="white-text" href="https://www.facebook.com/LeRusHyrisTV/">Facebook</a></li>
                  <li><a class="white-text" href="#!">Link 2</a></li>
                  <li><a class="white-text" href="#!">Link 3</a></li>
                  <li><a class="white-text" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            Made by <a class="brown-text text-lighten-3" href="http://materializecss.com">Materialize</a>, powered by <a class="brown-text text-lighten-3" href="https://reactjs.org/">React.JS</a>.
            </div>
          </div>
        </footer>
    </div>
    )
    }
}
    

        
      
export default Footer;
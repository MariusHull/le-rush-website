import React, { Component } from 'react';
import axios from 'axios';



class Acces extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
  }


  render() {
    return (
      <div class = "container"> 
      <h2> Plan d'accès : </h2>
        <AccessList/>

      <div class = "row">
        <div class = "col s12 m2 l3" ></div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2632.8250845456823!2d2.1617608158991994!3d48.708824119179866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67f5ab9b602a9%3A0x7cfcf25a43cab9eb!2sCentraleSup%C3%A9lec+-+Campus+Paris+Saclay!5e0!3m2!1sfr!2sfr!4v1543184807143" class = "col s12 m8 l6" height = "500px" frameBorder="0" title="plan accès"></iframe>
        <div class = "col s12 m2 l3" ></div>
      </div>


    </div>
    );
  }
}





  function AccessList(props) {
    return(
      <div class="row">
      <div class="col s12 m6 l6">
        <div class="card-panel black lighten-5 z-depth-1">
          <div class="row valign-wrapper">
            <div class="col s4 m5 l3">
            <i class="large material-icons">directions_car</i>
            </div>
            <div class="col s8 m7 l9">
              <span class="black-text">
                En voiture : <br/>
                3, rue Joliot-Curie <br/>
                91190, Gif-sur-Yvette 
                <br/>
                <br/>
                Accès par la N118, sortie 9
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="col s12 m6 l6">
        <div class="card-panel black lighten-5 z-depth-1">
          <div class="row valign-wrapper">
            <div class="col s4 m5 l3">
            <i class="large material-icons">directions_subway</i>
            </div>
            <div class="col s8 m7 l9">
              <span class="black-text">
                Par le RER B : <br/>
                Station Massy-Palaiseau <br/>
                <br/>
                Lignes de bus : <br/>
                91.06 ou 91.10 ou ligne 9 <br/>
                Arrêt Joliot-Curie ou Moulon<br/>
              </span>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }


  export default Acces;
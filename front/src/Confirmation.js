import React, { Component } from 'react';
import axios from 'axios';

class Confirm extends Component {
  constructor(props) {
    super(props);
  }

  render() { 
    return (
        <div className="container">
            <h1 class="row"></h1>
            <h1 class="row"></h1>
            <h1 class="row"></h1>

            <h1 className="center-align">Votre inscription a bien été prise en compte.</h1>
            <h1 class="row"></h1>
            <h1 class="row"></h1>
            <h1 class="row"></h1>
            <div className="center-align">
            <a class="waves-effect waves-light btn-large couleurRush center-align" href="/"><i class="material-icons left">home</i>Retourner à l'accueil</a>
            </div>
            <h1 class="row"></h1>
            <h1 class="row"></h1>
            <h1 class="row"></h1>
            <h1 class="row"></h1>
        </div>
    );
    }
}

export default Confirm;
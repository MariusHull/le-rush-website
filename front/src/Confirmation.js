import React, { Component } from 'react';


class Confirm extends Component {
  

  render() { 
    return (
        <div className="">
            
            <div className="container valign-wrapper">
            <h1 className="center-align">Votre inscription a bien été prise en compte.</h1>
            </div>

            <div className="center-align espace">
            <a class="waves-effect waves-light btn-large couleurRush center-align" href="/"><i class="material-icons left">home</i>Retourner à l'accueil</a>
            </div>
            
        </div>
    );
    }
}

export default Confirm;
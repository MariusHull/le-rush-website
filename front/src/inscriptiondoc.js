import React, { Component } from 'react';
import { Link } from "react-router-dom";


class InscriptionDoc extends Component {
  
    render() {
      return (
        <div class = "container"> 
            <h2>Inscription</h2>
            <h4>La compétition</h4>
            
            <div className="justifier">
            L'inscription se fait grâce au document ci dessous, qui devra être rempli et renvoyé à l'adresse <a href="mailto:lerush@hyris.tv" className="couleurRushPolice">lerush@hyris.tv</a>
             avant le <a className="couleurRushPolice">Vendredi 20 Decembre 2019 à 23:59</a>.
            Ce délai est strict.
            <br />
            
            Le réglement des frais de participation , s'élevant à 10 euros par participant, devra être effectué avant le début du rush 
            <br />
            <br />
            <br />   
            </div>
            <div className="center-align">
            <a href="inscription.docx" id="download-button"
                                className=" center espaceDroite btn-large waves-effect waves-light teal lighten-1">  <i height="10px" class=" large material-icons">attach_file</i>  Document d'inscription
            </a>
            </div>
            <br />
            <br />
        </div>
        
        );
    }
}

export default InscriptionDoc;
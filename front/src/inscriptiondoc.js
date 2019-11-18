import React, { Component } from 'react';
import { Link } from "react-router-dom";


class InscriptionDoc extends Component {
  
    render() {
      return (
        <div class = "container"> 
            <h2>Condition d'inscription</h2>
            
            <div className="justifier">
            Les équipes étant aptes à participer au concours de courts-métrages « Le Rush » doivent être issues d’une association audiovisuelle étudiante d’un établissement de l’enseignement supérieur (par exemple : école d’ingénieurs, école de commerce, faculté, IUT…). 
            De plus, chaque établissement n’est autorisé à présenter qu’une équipe de participants pour le concours.
             Enfin, les frais d’inscription qui couvrent les frais logistiques s’élèvent à 10€ par participant et le règlement doit être fait avant le début du Rush par Lydia ou virement bancaire.

            <br />
            <h5 className="couleurRushPolice">Critères de pré-selection</h5>
                <ul>
                    <li>- Les équipes doivent avoir envoyé leur dossier d’inscription à l’adresse mail <a className="couleurRushPolice">lerush@hyris.tv</a> avant le vendredi 20 décembre 23:59, délai strict.</li>
                    <li>- Compte tenu des capacités d’accueil, toutes les équipes ayant produit une vidéo Pré-Rush dans les temps impartis seront sélectionnées pour le Rush (pas d’équipes rejetées).</li>
                    <li>-Le dossier d’inscription est valable pour le Pré-Rush et le Rush. Vérifiez donc vos disponibilités pour réaliser la vidéo Pré-Rush <a className="couleurRushPolice">(du lundi 6 janvier au dimanche 2 février 2020 )</a> et pour le week-end du Rush, notamment si vous devez voyager le vendredi dans la journée, (le Rush se déroule du vendredi 28 février 17h au dimanche 1er mars 14h).
</li>
                </ul>
             
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
            <div className="valign-wrapper center center-block">
            <img src="IMGInscription.jpg" className = "center" width = "80%" height = "80%" alt="Le Rush logo"></img></div>    
        </div>
        
        
        );
    }
}

export default InscriptionDoc;
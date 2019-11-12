import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Edition2019 extends Component {
  
    render() {
      return (
        <div class = "container"> 
            <h2>Déroulement du Rush</h2>
            <h4>La compétition</h4>
            <div className="justifier">
            Le Rush est un festival de courts-métrages étudiants qui se déroule du vendredi après-midi au dimanche après-midi (certaines équipes venant de loin devront voyager le vendredi dans la journée).
             L’évènement s’organise autour de deux temps forts : le Pré-Rush et le Rush.
                <ul>
                    <li>
                        - <a className="couleurRushPolice"> Le pré-rush </a> : chaque équipe doit produire une vidéo de 5 à 7 minutes sur un thème imposé qui sera révélé début janvier. 
                        Les équipes disposent d’un mois pour réaliser le court-métrage.
                        Le Pré-Rush sera jugé par un jury sélectionné par notre partenaire CANAL+ qui organisera la remise des prix dans leurs locaux le vendredi en fin d’après midi suivi d’un apéro cordial.

                    </li>
                    <br/>
                    <li>
                        - <a className="couleurRushPolice"> Le rush </a> : Le thème imposé est révélé le vendredi soir au retour de la remise des prix chez CANAL+. 
                        Les équipes ont alors jusqu’au dimanche matin pour produire un court-métrage sur ce thème imposé. 
                        Une contrainte viendra s’ajouter le samedi dans la journée. En parallèle seront organisées des activités autour du monde du cinéma pour le public. 
                        Le dimanche matin sera organisé la cérémonie.

                    </li>
                </ul>
            </div>
            <h4>Les équipes</h4>
            <div className="justifier">
                Le concours rassemble des associations d’audiovisuel étudiantes venant <a className="couleurRushPolice">d’écoles de l’enseignement supérieur de toute la France </a>. 
                Une équipe doit être constituée de <a className="couleurRushPolice">5 à 7 participants</a> pour prendre part à la compétition. 
                Chaque équipe devra désigner un capitaine qui sera la personne responsable tout au long du concours d’être en contact avec les organisateurs du Rush.
            </div>

            <h4>Paiement de l'inscription</h4>
            <div className="justifier">
                Les frais d’inscription sont de <a className="couleurRushPolice">10€ par personne</a> sans hébergement le vendredi soir, 12€ par personne si vous souhaitez être hébergé sur le campus le vendredi soir en plus du samedi.  
                Vous pouvez payer par <a className="couleurRushPolice" href="https://lydia-app.com/fr/">Lydia</a> ou par virement (un rib vous sera envoyé). 
                Le paiement s’effectue pour toute l’équipe en même temps. 
            </div>

            <h4>Le matériel</h4>
            <div className="justifier">
            Les équipes doivent apporter leur propre matériel de tournage (caméras, light, prise de son, batteries, carte SD) et de montage (PC). 
            Chaque équipe disposera tout au long du Rush une salle dans laquelle elle pourra disposer son matériel en toute sécurité et réaliser son montage (accès à des bureaux, chaises, tableaux, prises électriques). 
            Un accès Internet en Wifi via eduroam est aussi assuré.
            </div>

            <h4>Logistique</h4>
            <div className="justifier">
            Pendant toute la durée du Rush, une salle (type dojo) sera mise à la disposition des équipes pour pouvoir se reposer et dormir. 
            Chaque participant devra alors apporter un duvet. Des douches et sanitaires seront aussi en libre-service pour les participants.
            En ce qui concerne les repas, <a className="couleurRushPolice">ils sont compris dans les frais d’inscriptions</a>, ainsi des moments seront réservés dans la compétition pour se restaurer grâce aux repas préparés par nos staffeurs.

            </div>

            <h4>Cérémonie de clôture</h4>
            <div className="justifier">
            Le dimanche en début de matinée après la fin de la compétition aura lieu un brunch suivi de la cérémonie de clôture où les courts-métrages où les courts-métrages de toutes les équipes seront projetés devant les participants et le public. 
            Les jurys ayant visionné les courts-métrages plus tôt dans la matinée remettront alors les prix suivants : <a className="couleurRushPolice">Meilleure Photographie, Meilleur scénario, Grand Prix. </a>
            Chaque équipe gagnante recevra un lot en rapport avec du matériel d’audiovisuel.

        
                <br/><br/><br/>
            </div>
            <div className="row center">
                <Link to="inscription" id="download-button" className="btn-large waves-effect waves-light teal lighten-1">S'inscrire</Link>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
            
            <div className="parallax-container valign-wrapper">
            <div className="section no-pad-bot">
            </div>
            <div className="parallax"><img src="IMGAcceuil.jpg" className="zoomout" alt="Le Rush logo"></img></div>
        </div>    
        </div>
        
        );
    }
}

export default Edition2019;
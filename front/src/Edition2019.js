import React, { Component } from 'react';

class Edition2019 extends Component {
  
    render() {
      return (
        <div class = "container"> 
            <h2>Déroulement de l'édition 2019</h2>
            <h4>La compétition</h4>
            <div className="justifier">
                Vous aurez à réaliser deux vidéos pour le festival : 
                <ul>
                    <li>
                        Une vidéo “PréRush”, sur un thème imposé, qui sera dévoilé à la clôture des inscriptions. 
                        Vous aurez un mois pour réaliser un court-métrage d’une durée minimale de 5 minutes. 
                        Cette vidéo sera jugée par un jury constitué de membres de Canal +. 
                        Les trois meilleures vidéos seront récompensées lors d'une cérémonie qui aura lieu le vendredi soir.<br/>
                    </li>
                    <li>
                        <br/>
                        Une vidéo “Rush”, que vous devrez réaliser en temps limité pendant le weekend. 
                        Cette vidéo sera jugée par un collège de professionnels du cinéma et sera diffusée lors de la cérémonie de clôture du Festival. 
                        Le thème sera dévoilé au lancement du Rush, le samedi matin.
                    </li>
                </ul>
            </div>
            <h4>Les équipes</h4>
            <div className="justifier">
                Vous pouvez constituer des équipes de 5 à 7 participants pour prendre part à la compétition. 
                Chaque équipe devra comporter un capitaine, qui sera la personne responsable en contact avec le respo équipe (Charles Combelles, 06 88 69 25 48).
            </div>

            <h4>Paiement de l'inscription</h4>
            <div className="justifier">
                Les frais d’inscription sont de 10€ par personne sans hébergement le vendredi soir, 12€ par personne si vous souhaitez être hébergé sur le campus le vendredi soir en plus du samedi.  
                Vous pouvez payer par <a className="couleurRushPolice" href="https://lydia-app.com/fr/">Lydia</a> ou par virement (un rib vous sera envoyé). 
                Le paiement s’effectue pour toute l’équipe en même temps. 
            </div>

            <h4>Le matériel</h4>
            <div className="justifier">
                Vous devrez apporter votre propre matériel de tournage (caméras, light, prise de son) et de montage (pc). Nous ne pourrons pas prêter de matériel sur place, en raison du grand nombre d’équipes. 
	            Nous vous fournirons une salle sécurisée, avec une carte d’accès par équipe, dans laquelle vous pourrez laisser votre matériel pendant votre tournage.
	            Vous aurez également accès à un endroit où vous pourrez vous installer pour faire votre montage, et vous aurez un accès Internet via eduroam.
            </div>

            <h4>Déroulement du week-end</h4>
            <div className="justifier">
                <div>
                    Le vendredi 1 Février au soir Canal+ vous accueille pour une cérémonie récompensant les meilleures vidéos ‘Prérush’. 
                    Au programme, un départ du campus en navette à 18h vers les locaux de Canal + à Issy-les-Moulineaux où une remise de prix aura lieu par notre partenaire. 
                    Cette cérémonie sera suivie d’une masterclass dispensée par Canal et d’un cocktail. 
                    Vous pourrez être hébergés le vendredi soir sur le campus de CentraleSupélec. 
                </div>
                <br/>
                <div>
                    Le week-end commencera autour d’un petit déjeuner à 8h30 où vous serez briefés sur le déroulement du week-end. 
                    Le thème du concours sera dévoilé à 10h.
                </div>
                <br/>
                <div>
                    Vous aurez ensuite jusqu’à dimanche midi pour tourner vos vidéos. 
                    Une cérémonie aura lieu dans l’après-midi où seront remis jusqu’à 2000 euros de lots pour <em>la meilleure vidéo, la meilleure réalisation, le meilleur scénario. </em>
                </div>
                <br/><br/><br/>
            </div>

        </div>
        );
    }
}

export default Edition2019;
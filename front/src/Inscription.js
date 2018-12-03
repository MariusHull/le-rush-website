import React  from 'react';
import axios from 'axios';


class Inscription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {nomEcole: "", nomAsso:"", veutPreRush: false, dateArrivee:"Vendredi", veutHebergement: false, remarques:"", liste: []};
    this.actualiseNom = this.actualiseNom.bind(this);
    this.actualisePreRush = this.actualisePreRush.bind(this);
    this.actualiseVeutHebergement = this.actualiseVeutHebergement.bind(this);
    this.actualiseDateArrivee = this.actualiseDateArrivee.bind(this);
    this.actualiseListe = this.actualiseListe.bind(this);
    this.actualiseRemarque = this.actualiseRemarque.bind(this);
    this.estCorrect = this.estCorrect.bind(this);
    this.inscrire = this.inscrire.bind(this);
  }

  actualiseNom(nom, target) {
    if(target.name==="school"){
      this.setState({nomEcole: nom});
    } else { this.setState({nomAsso: nom})}
  }

  actualiseListe(liste) {
    this.setState({liste: liste});
  }

  actualisePreRush(event) {
    this.setState({veutPreRush: event.target.value});
  }

  actualiseVeutHebergement(event) {
    this.setState({veutHebergement: event.target.value});
  }

  actualiseDateArrivee(event) {
    this.setState({dateArrivee: event.target.value})
  }

  actualiseRemarque(event) {
    this.setState({remarques: event.target.value})
  }

  estCorrect(){
    if(this.state.liste.length<5 || this.state.liste.lenght>7) {
      window.alert("Votre équipe doit comporter entre 5 et 7 membres!")
      return false
    }
    else if(this.state.nomEcole==="" || this.state.nomAsso===""){
      window.alert("Veuillez bien indiquer le nom de votre école et de votre association/équipe")
      return false
    }
    else { return true }
  }

  inscrire() {
    if(this.estCorrect()){
      window.confirm('Confirmez-vous les infformations précédentes ?', axios.post('http://localhost:3000/equipes', this.state)
        .then((result) => {console.log(result)})
        )
    }
  }

  render() {
      return (
        <div className="container">
          <h2>Formulaire d'inscription</h2>
          <br/>
          <NomEquipe nomEcole={this.state.nomEcole} nomAsso={this.state.nomAsso} actualiseNom={this.actualiseNom}/>
          <h3>Membres de l'équipe : </h3>
          <ListeInscrits actualiseListe={this.actualiseListe}/>
          <DateArrivee arriveVendredi={this.state.arriveVendredi} actualiseDateArrivee={this.actualiseDateArrivee}/>
          <ParticipePreRush participe={this.state.veutPreRush} actualisePreRush={this.actualisePreRush}/>
          <VeutHebergement veutHebergement={this.state.veutHebergement} actualiseVeutHebergement={this.actualiseVeutHebergement}/>
          <Remarques remarques={this.state.remarques} actualiseRemarque={this.actualiseRemarque}/>

          <div className="row"></div>
          <a class="waves-effect waves-light btn" onClick={()=> this.inscrire()}><i class="material-icons right">add</i>Confirmer l'inscription</a>
          <div className="row"></div>
        </div>
      );
    }
}




class NomEquipe extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.props.actualiseNom(event.target.value, event.target)
  }


  render() {
      return (
        <form>
          <div className="row">
          <div className="input-field col s12 l6">
              <textarea
                class="materialize-textarea"
                name='school'
                id="nomEcole"
                value={this.props.nomEcole}
                onChange={this.handleInputChange} ></textarea>
                <label htmlFor="nomEcole">Nom de votre école</label>
          </div>

          <div className="input-field col s12 l6">
              <textarea
                class="materialize-textarea"
                name='asso'
                id="nomAsso"
                value={this.props.nomAsso}
                onChange={this.handleInputChange} ></textarea>
                <label htmlFor="nomAsso">Nom de votre association (équipe) :</label>
          </div>
          </div>

        </form>
        );

    }
}

class ListeInscrits extends React.Component {
    constructor(props) {
        super(props);
        this.state = {liste: [], nomEnCours: "", prenomEnCours: "", telEnCours: "", toutChampsComplets: false };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(inscrit, target) {
      if(this.state.nomEnCours===""|| this.state.prenomEnCours==="" || this.state.telEnCours==="" ){
        this.setState({toutChampsComplets: false});
      } else {
        this.setState({toutChampsComplets: true});
      }

      if(target.name==="nom"){
        this.setState({nomEnCours: inscrit});}
      else if (target.name==="prenom") {
        this.setState({prenomEnCours: inscrit});}
      else {
        this.setState({telEnCours: inscrit})}
    }

    ajouterLigne(nom,prenom,tel) {
        this.setState({liste: this.state.liste.concat([nom + "[esp]" +prenom + "[esp]"+tel]), nomEnCours: "", prenomEnCours: "", telEnCours: ""});
        setTimeout(() => this.props.actualiseListe(this.state.liste),100);
    }

    render() {
        return (
          <div>
            <Candidat
            nom={this.state.nomEnCours}
            prenom={this.state.prenomEnCours}
            tel={this.state.telEnCours}
            actualiser={this.handleChange}/>
            <br/>
            {this.state.toutChampsComplets ?
                <a class="waves-effect waves-light btn" onClick={()=> this.ajouterLigne(this.state.nomEnCours,this.state.prenomEnCours,this.state.telEnCours)}><i class="material-icons right">add</i>Inscrire le membre</a>
                :
                <a class="btn disabled" ><i class="material-icons right">add</i>Inscrire le membre</a>
            }
            <div className="row"></div>
            <div className="row">
            <h4 className="col s12 m4 l4"> Liste des inscrits : </h4>
            <div className="col s12 m8 l8"><CandidatsListe liste={this.state.liste}/></div>
            </div>
          </div>
        );
    }
}

function CandidatsListe(props) {
  const listeCandidats = props.liste.map(
    (candidat) => <tr> <td>{candidat.split("[esp]")[0]}</td><td>{candidat.split("[esp]")[1]}</td><td>{candidat.split("[esp]")[2]}</td></tr>
  );
  return(
    <table>
    <thead>
      <tr>
          <th>Nom</th>
          <th>Prénom</th>
          <th>N° de téléphone</th>
      </tr>
    </thead>

    <tbody>
    {listeCandidats}
    </tbody>
  </table>

  );
}

class Candidat extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    
      handleInputChange(event) {
        this.props.actualiser(event.target.value, event.target)
      }


      render() {
        return (
          <form>
          <div className="row">
          <div className="input-field">
              <textarea
                class="materialize-textarea"
                name='nom'
                id="nomParticipant"
                value={this.props.nom}
                onChange={this.handleInputChange} ></textarea>
                <label htmlFor="nomParticipant">Nom :</label>
          </div>  
          </div>

          <div className="row">
          <div className="input-field">
              <textarea
                class="materialize-textarea"
                name='prenom'
                id="prenomParticipant"
                value={this.props.prenom}
                onChange={this.handleInputChange} ></textarea>
                <label htmlFor="prenomParticipant">Prénom :</label>
          </div>  
          </div>

          <div className="row">
          <div className="input-field">
              <textarea
                class="materialize-textarea"
                name='tel'
                id="telParticipant"
                value={this.props.tel}
                onChange={this.handleInputChange} ></textarea>
                <label htmlFor="telParticipant">Téléphone :</label>
          </div>  
          </div>
          </form>
        );
      }
}

class DateArrivee extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange=this.handleInputChange.bind(this);
}



handleInputChange(event) {
  this.props.actualiseDateArrivee(event)

}



render() {
    return (
      <form action="#">
      &nbsp;Quand prévoyez-vous d'arriver sur le campus de CentraleSupélec ? (A titre indicatif)&nbsp;

          <p>
            <label>
              <input name="group1" type="radio" value="Vendredi" onChange={this.handleInputChange}/>
              <span>Vendredi 01/02</span>
            </label>
          </p>
          <p>
            <label>
              <input name="group1" type="radio" value="Samedi" onChange={this.handleInputChange}/>
              <span>Samedi 02/02</span>
            </label>
          </p>
          <p>
            <label>
              <input name="group1" type="radio" value="Autre" onChange={this.handleInputChange}/>
              <span>Autre</span>
            </label>
          </p>

        </form>
    );
  }
}

class ParticipePreRush extends React.Component {
  constructor(props) {
      super(props);
      this.handleInputChange=this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.props.actualisePreRush(event)
  }

  render() {
      return (
        <form action="#">
        &nbsp;Voulez-vous participer à la cérémonie pré-Rush organisée le vendredi soir (masterclass, remise des prix des vidéos anticipées, ...) &nbsp;

            <p>
              <label>
                <input name="group1" type="radio" value={false} onChange={this.handleInputChange}/>
                <span>Non</span>
              </label>
            </p>
            <p>
              <label>
                <input name="group1" type="radio" value={true} onChange={this.handleInputChange}/>
                <span>Oui</span>
              </label>
            </p>


          </form>
      );
    }
}

class VeutHebergement extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange=this.handleInputChange.bind(this);
}

handleInputChange(event) {
  this.props.actualiseVeutHebergement(event)
}

render() {
    return (
      <form action="#">
      &nbsp;Voulez-vous être hébergés dans la nuit du vendredi 01/02 au samedi 02/02 ? (supplément de 2€/pers.) &nbsp;

          <p>
            <label>
              <input name="group1" type="radio" value={false} onChange={this.handleInputChange}/>
              <span>Non</span>
            </label>
          </p>
          <p>
            <label>
              <input name="group1" type="radio" value= {true} onChange={this.handleInputChange}/>
              <span>Oui</span>
            </label>
          </p>


        </form>
    );
  }
}

class Remarques extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.props.actualiseRemarque(event)
  }


  render() {
      return (
        <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s12">
              <textarea id="textarea1" class="materialize-textarea" value={this.props.remarques} onChange={this.handleInputChange}></textarea>
              <label for="textarea1">Remarques quelconques à nous transmettre (facultatif) :</label>
            </div>
          </div>
        </form>
      </div>
        );

    }
}





export default Inscription
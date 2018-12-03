import React  from 'react';


class Inscription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {nomEcole: "", nomAsso:"", listeMembres:"", veutPreRush: false, dateArrivee:"Vendredi", heureArrivee:"", veutHebergement: false, remarques:"", liste: []};
    this.actualiseNom = this.actualiseNom.bind(this);
    this.actualisePreRush = this.actualisePreRush.bind(this);
    this.actualiseVeutHebergement = this.actualiseVeutHebergement.bind(this);
    this.actualiseDateArrivee = this.actualiseDateArrivee.bind(this);
    this.actualiseListe = this.actualiseListe.bind(this);
  }

  actualiseNom(nom, target) {
    if(target.name==="school"){
      this.setState({nomEcole: nom});
    }
  }

  actualiseListe(liste) {
    this.setState({liste: liste});
  }

  actualisePreRush(event) {
    this.setState({veutPreRush: !this.state.veutPreRush});
  }

  actualiseVeutHebergement(event) {
    this.setState({veutHebergement: !this.state.veutHebergement});
  }

  actualiseDateArrivee(event) {
    this.setState({dateArrivee: event.target.value})
  }


  render() {
      return (
        <div className="container">
          <h2>Formulaire d'inscription</h2>
          <br/>
          <NomEquipe nomEcole={this.state.nomEcole} nomAsso={this.state.nomAsso} actualiseNom={this.actualiseNom}/>
          <h3>Membres de l'équipe : </h3>
          <ListeInscrits actualiseListe={this.actualiseListe}/>
          <DateHeureArrivee arriveVendredi={this.state.arriveVendredi} actualiseDateArrivee={this.actualiseDateArrivee}/>
          <ParticipePreRush participe={this.state.veutPreRush} actualisePreRush={this.actualisePreRush}/>
          <VeutHebergement veutHebergement={this.state.veutHebergement} actualiseVeutHebergement={this.actualiseVeutHebergement}/>
          <Remarques/>
          {this.state.liste}

          

        </div>
      );
    }
}
//<a class="waves-effect waves-light btn" onClick={()=> console.log("ca marche")}><i class="material-icons right">add</i>Confirmer</a>



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
            <label>
              &nbsp;<h6>Nom de votre école:</h6> &nbsp;
              <input
                name='school'
                type="text"
                value={this.props.nomEcole}
                onChange={this.handleInputChange} />
            </label>

            <label>
              &nbsp;Nom de votre association (équipe) : &nbsp;
              <input
                name='asso'
                type="text"

                value={this.props.nomAsso}
                onChange={this.handleInputChange} />
            </label>


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
            
            <h3> Ceci est la liste des inscrits : </h3>
            <CandidatsListe liste={this.state.liste}/>
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
            <label>
              &nbsp;Nom : &nbsp;
              <input
                name='nom'
                type="text"
                value={this.props.nom}
                onChange={this.handleInputChange} />
            </label>

            <label>
              &nbsp;Prénom : &nbsp;
              <input
                name='prenom'
                type="text"

                value={this.props.prenom}
                onChange={this.handleInputChange} />
            </label>

            <label>
              &nbsp;Télephone : &nbsp;
              <input
                name='tel'
                type="text"

                value={this.props.tel}
                onChange={this.handleInputChange} />
            </label>
          </form>
        );
      }
}

class DateHeureArrivee extends React.Component {
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
                <input name="group1" type="radio" className="" checked={this.props.participe} onChange={this.handleInputChange}/>
                <span>Non</span>
              </label>
            </p>
            <p>
              <label>
                <input name="group1" type="radio" onChange={this.handleInputChange}/>
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
              <input name="group1" type="radio" checked={this.props.veutHebergement} onChange={this.handleInputChange}/>
              <span>Non</span>
            </label>
          </p>
          <p>
            <label>
              <input name="group1" type="radio" onChange={this.handleInputChange}/>
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
  }


  render() {
      return (
        <div>
          

        </div>
      );
    }
}





export default Inscription
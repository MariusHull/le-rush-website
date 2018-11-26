import React  from 'react';



class Candidat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          nom: '',
          prenom: '',
          tel: '',
        };
    
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



class Inscription extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
          <div>
            <h2>Ceci est la page d'inscriptions</h2>
            <br/>
            <ListeInscrits/>
          </div>
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
        if(target.name==="nom"){
            this.setState({nomEnCours: inscrit});}
        else if (target.name==="prenom") {
            this.setState({prenomEnCours: inscrit});
        }
        else {
            this.setState({telEnCours: inscrit})
        }
        if(this.state.nomEnCours===""|| this.state.prenomEnCours==="" || this.state.telEnCours==="" ){
            this.setState({toutChampsComplets: false});
        } else {
            this.setState({toutChampsComplets: true});
        }
    }

    ajouterLigne(nom,prenom,tel) {
        this.setState({liste: this.state.liste.concat([nom + "[esp]" +prenom + "[esp]"+tel]), nomEnCours: "", prenomEnCours: "", telEnCours: ""})
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

function BoutonInscrire(props) {
    
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


export default Inscription
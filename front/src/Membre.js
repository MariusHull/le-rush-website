import React, { Component } from 'react';
import axios from 'axios';

class Membre extends Component {
  constructor(props) {
    super(props);
    this.state={MdP: "", allowed: false, link: "", equipes: []}
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
      this.setState({MdP: event.target.value})
}
  

componentDidMount() {
  axios.get('https://api.rush.cs-campus.fr/equipes')
    .then(res => {
      this.setState({ equipes: res.data });
      console.log(this.state.equipes);
    });
}
  

  render() { 
    if (this.state.MdP!=="bite"){
    return (
        <form className="container">
        <h5>Accès réservé aux membres</h5>
        <div className="row">
        <div className="input-field col s12 l6">
            <input type="password"
              class="validate"
              name='school'
              id="nomEcole"
              value={this.MdP}
              onChange={this.handleInputChange} ></input>
              <label htmlFor="nomEcole">Mot De Passe :</label>
        </div>
        </div>

        <div className="row"></div>
        </form>
    );
  }
  else {
    return (
      <div>
        <ListeEquipes equipes={this.state.equipes}/>
      </div>
    )
  }
}
}

function ListeConcs(props) {
  const listeConcs = props.liste.map(
    (candidat) => <tr><td>{candidat.split("[esp]")[0]}</td><td>{candidat.split("[esp]")[1]}</td></tr>
  );
  return(
    <tbody>
    {listeConcs}
    <tr>{props.rqs}</tr>
    </tbody>

  );
}


function ListeEquipes(props) {
  const listeEquipes = props.equipes.map(
    (equipe) => 
    
    <table>
      <thead>
        <tr> 
        <th>{equipe.nomEcole} / {equipe.nomAsso}</th>
        <th>{equipe.liste.length}</th>
        <th>{equipe.veutPreRush.toString()}</th>
        <th>{equipe.veutHebergement.toString()}</th>
        <th>{equipe.dateArrivee}</th>
        <th>{equipe.telCapitaine}</th>
        <th>{equipe.mailCapitaine}</th>
      </tr>
      </thead>

      
        
        <ListeConcs liste={equipe.liste} rqs={equipe.remarques}/>
        
      
    </table>

      
      
    
  );



  return(
    <div>
    <table>
      <thead>
        <tr>
            <th>Ecole et Association : </th>
            <th>Nombre de participants</th>
            <th>PréRush ?</th>
            <th>Hébergement ?</th>
            <th>Arrivée ?</th>
            <th>Numéro Capitaine</th>
            <th>Mail Capitaine</th>
        </tr>
      </thead>

      <tbody>

      </tbody>
    </table>


    {listeEquipes}

    </div>
   
    

  );
}

export default Membre;
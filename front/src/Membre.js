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



function ListeEquipes(props) {
  const listeEquipes = props.equipes.map(
    (equipe) => 
    
      <tr> 
        <td>{equipe.nomEcole} / {equipe.nomAsso}</td>
        <td>{equipe.liste.length}</td>
        <td>{equipe.liste.toString()}</td>
        <td>{equipe.veutPreRush.toString()}</td>
        <td>{equipe.veutHebergement.toString()}</td>
        <td>{equipe.dateArrivee}</td>
      </tr>
      
    
  );



  return(
    
    <table>
      <thead>
        <tr>
            <th>Ecole et Association : </th>
            <th>Nombre de participants</th>
            <th>Participants</th>
            <th>PréRush ?</th>
            <th>Hébergement ?</th>
            <th>Arrivée ?</th>
        </tr>
      </thead>

      <tbody>
        {listeEquipes}
      </tbody>
    </table>
   
    

  );
}

export default Membre;
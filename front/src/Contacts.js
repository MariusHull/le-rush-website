import React, { Component } from 'react';
import axios from 'axios';



class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
  }

  componentDidMount() {
    axios.get('https://api.rush.cs-campus.fr/contacts')
      .then(res => {
        this.setState({ contacts: res.data });
        console.log(this.state.contacts);
      });
  }

  render() {
    return (
      <div class = "container"> 
      <h2> Contacts : </h2>
        <div class = "center">
        <div class="col s12 m12 l7 center">
          <div class="card-panel black lighten-5 z-depth-1">
            <div class="row valign-wrapper center">
              <div class="col s12">
                <span class="black-text">
                 <i class="tiny material-icons" >mail</i> Adresse générale de contact : <a className="couleurRushPolice" >lerush@hyris.tv</a> 
                  <br/>
            
                  A contacter pour les questions générales et l'inscriptions
                </span>
              </div>
            </div>
          </div>
        </div> 
          <ContactList tableauContacts={tableauContacts}/>
          
        </div>

 
  
    </div>
    );
  }
}




  const tableauContacts = [{nom: "Marina Tazit", mail: "marina.tazit@student-cs.fr", fonction: "Présidente", desc: "Question d'équipes"}, 
  
  {nom: "Magali Morin",  mail: "magali.morin@student-cs.fr", fonction: "Vice-Présidente ", desc: "Questions partenariats"}, 
  
  {nom: "Nicolas Pannier", mail: "nicolas.pannier@student-cs.fr", fonction: "Secrétaire général", desc: "Questions logistiques, planifications" },
  {nom: "Maxime Rougieux", mail: "maxime.rougieux@student-cs.fr", fonction: "Trésorier", desc: "Questions frais divers, subventions" }
]



  
  function ContactList(props) {
    const listContacts = props.tableauContacts.map(
      (contact) => <AfficheContact fonction ={contact.fonction} nom={contact.nom}  mail={contact.mail} desc={contact.desc}/>
    );
    return(
      <div class="row">
        {listContacts}
      </div>
    );
  }

  function AfficheContact(props) {
    const renderr = (
      <div class="col s12 m12 l7 center">
        <div class="card-panel black lighten-5 z-depth-1">
          <div class="row valign-wrapper center">
            <div class="col s12">
              <span class="black-text">
                {props.fonction} : <a className="couleurRushPolice" href="#">{props.nom} </a> 
                <br/>
                <i class="tiny material-icons" >mail</i> {props.mail} <br/>
                A contacter pour : {props.desc}
              </span>
            </div>
          </div>
        </div>
      </div>
      );
    
    return(
      renderr
    );
  }






  export default Contacts;
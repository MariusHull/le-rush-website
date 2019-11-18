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
      <h2 className="center"> Contacts : </h2>
        <ContactList className ="center" tableauContacts={tableauContacts}/>
  
 
  
    </div>
    );
  }
}




  const tableauContacts = [{nom: "Adresse mail générale de contact", mail: "lerush@hyris.tv", fonction: "", desc: "Questions générales et inscription"},
    {nom: "Marina Tazit", mail: "marina.tazit@student-cs.fr", fonction: "Présidente :", desc: "Questions d'équipes"}, 
  
  {nom: "Magali Morin",  mail: "magali.morin@student-cs.fr", fonction: "Vice-Présidente :", desc: "Questions partenariats"}, 
  
  {nom: "Nicolas Pannier", mail: "nicolas.pannier@student-cs.fr", fonction: "Secrétaire général :", desc: "Questions logistiques, planifications" },
  {nom: "Maxime Rougieux", mail: "maxime.rougieux@student-cs.fr", fonction: "Trésorier :", desc: "Questions frais divers, subventions" }
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
      <div class="col s12 m12 l12 ">
        <div class="card-panel black lighten-5 z-depth-1 center-align">
          <div class="row valign-wrapper center-align">
            <div class=" center col s12">
              <span class="black-text">
                {props.fonction}  <a className="couleurRushPolice" href="#">{props.nom} </a> 
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
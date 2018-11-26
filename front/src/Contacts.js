import img from './plan.PNG'
import React, { Component } from 'react';


function Contacts(props) {
    return(
    <div> 
    
     <h2> Contacts : </h2>
      <ContactList tableauContacts={tableauContacts}/>
  
      <h2> Plan d'accès : </h2>
      <ul> 
        <li> Voiture : ...</li>
        <li> Transports : ...</li>    
      </ul>
    <div class = "row">
        <div class = "col s12 m2 l3" ></div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2632.8250845456823!2d2.1617608158991994!3d48.708824119179866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67f5ab9b602a9%3A0x7cfcf25a43cab9eb!2sCentraleSup%C3%A9lec+-+Campus+Paris+Saclay!5e0!3m2!1sfr!2sfr!4v1543184807143" class = "col s12 m8 l6" height = "750" frameborder="0" id="maps" allowfullscreen></iframe>
        <div class = "col s12 m2 l3" ></div>
    </div>

      <h2> Sponsors </h2>
      <ul> 
        <li>Canal + </li>
        <li>UPS</li>    
      </ul>
  
    </div>
    );
  }
  
  const tableauContacts = [{nom: "Marius Hullin", telephone: "01 47 20 00 01", mail: "mediavision@ciné.fr"}, {nom: "Marius Hullin", telephone: "01 47 20 00 01", mail: "mediavision@ciné.fr"}]
  
  function ContactList(props) {
    const listContacts = props.tableauContacts.map(
      (contact) => <li> {contact.nom} , {contact.telephone} , {contact.mail}</li>
    );
    return(
      <ul> {listContacts}</ul>
    );
  }

  export default Contacts;
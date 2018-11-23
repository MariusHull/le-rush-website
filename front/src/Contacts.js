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
      <img className="Plan"
            src={img}
            alt='plan acces'
      />
  
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
import img from './plan.PNG'
import React, { Component } from 'react';


function Contacts(props) {
    return(
    <div class = "container"> 
    
     <h2> Contacts : </h2>
      <ContactList tableauContacts={tableauContacts}/>
  
      <h2> Plan d'accès : </h2>
      <ul> 
        <li> Voiture : ...</li>
        <li> Transports : ...</li>    
      </ul>

    

    <div class = "row">
        <div class = "col s12 m2 l3" ></div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2632.8250845456823!2d2.1617608158991994!3d48.708824119179866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67f5ab9b602a9%3A0x7cfcf25a43cab9eb!2sCentraleSup%C3%A9lec+-+Campus+Paris+Saclay!5e0!3m2!1sfr!2sfr!4v1543184807143" class = "col s12 m8 l6" height = "500px" frameborder="0" id="maps" allowfullscreen></iframe>
        <div class = "col s12 m2 l3" ></div>
    </div>

      <h2> Sponsors </h2>
      <ul> 
        <li>Canal + </li>
        <li>UPS</li>
        <li>FACS</li>    
      </ul>
  
    </div>
    );
  }
  
  const tableauContacts = [{nom: "Marius Hullin", telephone: "06 47 71 95 85", mail: "marius.hullin@student.ecp.fr", fonction: "Président du festival", 
  path: "https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/14915266_1148620721852333_6349151884132689361_n.jpg?_nc_cat=111&_nc_ht=scontent-cdt1-1.xx&oh=ba3a063962a7ec054cc698287a094d7f&oe=5C6DEBB2",
  profilePath: "https://www.facebook.com/marius.hullin"}, 
  
  {nom: "Leah Weisz", telephone: "06 35 50 20 30", mail: "leah.weisz@student.ecp.fr", fonction: "Vice-Présidente du festival", 
  path: "https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/20664978_859365470878334_1968459890973014306_n.jpg?_nc_cat=110&_nc_ht=scontent-cdt1-1.xx&oh=57aee857b84ad7d89b15f49a46b3506c&oe=5CAFB2D2",
  profilePath: "https://www.facebook.com/leah.weisz.98"}, 
  
  {nom: "Charles Combelles", telephone: "06 88 69 25 48", mail: "charles.combelles@student.ecp.fr", fonction: "Responsable équipes du festival", 
  path: "https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/41564838_1136235403194795_91169172007944192_n.jpg?_nc_cat=109&_nc_ht=scontent-cdt1-1.xx&oh=a532632d515bfd52c34487b8960b4ce9&oe=5C662412",
  profilePath: "https://www.facebook.com/charles.combelles"}]



  
  function ContactList(props) {
    const listContacts = props.tableauContacts.map(
      (contact) => <AfficheContact fonction ={contact.fonction} nom={contact.nom} tel={contact.telephone} mail={contact.mail} path={contact.path} profilePath={contact.profilePath}/>
    );
    return(
      <div class="row">
        {listContacts}
      </div>
    );
  }

  function AfficheContact(props) {
    const renderr = (
      <div class="col s12 m12 l7">
        <div class="card-panel black lighten-5 z-depth-1">
          <div class="row valign-wrapper">
            <div class="col s2">
              <img src={props.path} alt="" class="circle responsive-img"/>
            </div>
            <div class="col s10">
              <span class="black-text">
                {props.fonction} : <a href={props.profilePath}>{props.nom} </a> 
                <br/>
                <i class="tiny material-icons">phone</i> {props.tel} 
                <br/>
                <i class="tiny material-icons" >mail</i> {props.mail}
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
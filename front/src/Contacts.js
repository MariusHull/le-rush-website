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
    axios.get('http://rush.cs-campus.fr:4242/contacts')
      .then(res => {
        this.setState({ contacts: res.data });
        console.log(this.state.contacts);
      });
  }

  render() {
    return (
      <div class = "container"> 
      <h2> Contacts : </h2>
        <ContactList tableauContacts={this.state.contacts}/>
  
      <h2> Plan d'accès : </h2>
        <AccessList/>

      <div class = "row">
        <div class = "col s12 m2 l3" ></div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2632.8250845456823!2d2.1617608158991994!3d48.708824119179866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67f5ab9b602a9%3A0x7cfcf25a43cab9eb!2sCentraleSup%C3%A9lec+-+Campus+Paris+Saclay!5e0!3m2!1sfr!2sfr!4v1543184807143" class = "col s12 m8 l6" height = "500px" frameBorder="0" title="plan accès"></iframe>
        <div class = "col s12 m2 l3" ></div>
      </div>

      <h2> Nos partenaires : </h2>
        <PartnersList/>

  
    </div>
    );
  }
}



  /*
  const tableauContacts = [{nom: "Marius Hullin", telephone: "06 47 71 95 85", mail: "marius.hullin@student.ecp.fr", fonction: "Président du festival", 
  path: "https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/14915266_1148620721852333_6349151884132689361_n.jpg?_nc_cat=111&_nc_ht=scontent-cdt1-1.xx&oh=ba3a063962a7ec054cc698287a094d7f&oe=5C6DEBB2",
  profilePath: "https://www.facebook.com/marius.hullin"}, 
  
  {nom: "Leah Weisz", telephone: "06 35 50 20 30", mail: "leah.weisz@student.ecp.fr", fonction: "Vice-Présidente du festival", 
  path: "https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/20664978_859365470878334_1968459890973014306_n.jpg?_nc_cat=110&_nc_ht=scontent-cdt1-1.xx&oh=57aee857b84ad7d89b15f49a46b3506c&oe=5CAFB2D2",
  profilePath: "https://www.facebook.com/leah.weisz.98"}, 
  
  {nom: "Charles Combelles", telephone: "06 88 69 25 48", mail: "charles.combelles@student.ecp.fr", fonction: "Responsable équipes du festival", 
  path: "https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/41564838_1136235403194795_91169172007944192_n.jpg?_nc_cat=109&_nc_ht=scontent-cdt1-1.xx&oh=a532632d515bfd52c34487b8960b4ce9&oe=5C662412",
  profilePath: "https://www.facebook.com/charles.combelles"}]
*/


  
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

  function AccessList(props) {
    return(
      <div class="row">
      <div class="col s12 m6 l6">
        <div class="card-panel black lighten-5 z-depth-1">
          <div class="row valign-wrapper">
            <div class="col s4 m5 l3">
            <i class="large material-icons">directions_car</i>
            </div>
            <div class="col s8 m7 l9">
              <span class="black-text">
                En voiture : <br/>
                3, rue Joliot-Curie <br/>
                91190, Gif-sur-Yvette 
                <br/>
                <br/>
                Accès par la N118, sortie 9
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="col s12 m6 l6">
        <div class="card-panel black lighten-5 z-depth-1">
          <div class="row valign-wrapper">
            <div class="col s4 m5 l3">
            <i class="large material-icons">directions_subway</i>
            </div>
            <div class="col s8 m7 l9">
              <span class="black-text">
                Par le RER B : <br/>
                Station Massy-Palaiseau <br/>
                <br/>
                Lignes de bus : <br/>
                91.06 ou 91.10 ou ligne 9 <br/>
                Arrêt Joliot-Curie ou Moulon<br/>
              </span>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }

  function PartnersList(props) {
    return(
      <div class="">
        Le Rush ne serait pas possible sans chacun de ses partenaires. Toute l'équipe organisatrice les remercie chaleureusement. 
        <br/>
        <br/>
        <br/>
        <br/>
        
        <div className="center-block">
          
          
        <div class="row margin">
          <div class="col offset-l3 offset-xl3 offset-m3 s8 m5 l4 xl3">
          
            <a href="https://www.universite-paris-saclay.fr/fr"> 
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVIAAACVCAMAAAA9kYJlAAAAn1BMVEVjADz///9hADlcADH9/P1WACZbAC5fADVaAC1TACBZACtgADdXAChcADBdADOpi5ni2d3y7vCdeYpUACK1nKi6pK6JWnFtI0vc0dbs5ulRAByOYnewlaHHtb7Dr7huKE3NvsWigZF1Nlb39PV7QV7VyM6VbYDg1tuqjZuffY3v6uxxLlGXcINnE0KCTmdNABF3OllHAAB+SGNJAABOABZwGiplAAARHklEQVR4nO1daXuiPBcWECEsbogL7ntbtdPp2///215zzklIEGZ0tO0zc+X+0EsxJOEmy1nTWs3AwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMAAEIb2d3fhn4LnOq/9FfMNq48C27WtM+qzk/PdXfk3YAdDILR+/nOMvrs3/wTckZWjG393d/4BRDMksw6wDuF3d+ivhz2wNEq3ZurfizjVKK1bze/u0V+PaF+gdOx9d5f+drgvlo6lEaTuhNzvxSh9NjP/TkTbAqWvZsu/E85S3/HryXf36O9HoFOaNr67Q38/nK66Oa2D7+7Pv4AklaPUqs/NSvoIJGI5tdonI5Q+BrE3aa/rL4sxMwbTR8GO3SRxAzNE/xyOy1hgVs0Hgi1HVn278b+7H/8O2JDMzUYEfRAaKclM1srM/cfAFWKoNTVT/yGwN1JVGrnf3Zl/A/a7HKWG0gchkpQujEJ/Iyo2n2AmKN2Y7ekmxF6VMRkM+XXLejKD9BZ4rGX1qsIc3N7astp9416+BdmuY1mTysiROAlc12j0t8CFsLFqSg1uBrMMpQ+GofThMJQ+HH8BpfbDHQj246tU8HtKH9t82OAoXoWLeTsO/wpihhck/mDeZNFFrJBWkVOoQCLm17WHC2OX2fNBlAQXsTK2UiUvliTajxFjCUuiuCDDh0oTTf75J1D6xBqIQs+dc8uDuc3cYj1/irCfnjErSGWnGb/4JihxerzQ0TuLzMftGhS4YctplFXUUG6YnS44jVJAzmmYrFKQcazOthvoVdqvUAuvJHQPafus4kg67OQNLlidYfqqZSqE47yJ5pJ/7EH9w5TwpHLq+0t8IqudHpKHDFanBfXppkJ7Dhf74rUl0OjUT3ZrJW6gp3kQnSe4mMEXCtO8mGve2MKaxIVos7fUKl11pDSf4eK5FX9OpndRYWPVVm6rzwaR7EuMDDL+Odhal1AsTl6Qqr8MV49QSikI6DeUdvjX2c9poW9qchC9G6TUtuHLOiu05iIzA3FfJp+IAmbWG+UtNLtEae5ap1+j5yJPi5NYNpDSejWlbUlp8Fov/NYr9vgPcAOlvUWxcx3lNo3SWoRlCwGv9gkHAz2T7WpDDTi1xjmngtKceKI01qJsCGPq7fWUuhcv5vxq7uf0BkrFpF/ns3/LKigN0Vi+1a266OeR9SaC0fV2upDsvsvXQJQmvfyJgVJ6M+f79kOZ/1EXK+RvKRUT35cvZr9YDMV4nbLanbiBUkD6liUsGouu5sNQp7TGkCJ9g2LQ7xcqk9CoH75nURAkXk9wI+4hSvui7Zd2G5rzcQEaHjI3crNND17xsYxSb9c6AwfjYtlCdLHP4Tu1t3TdIIiyMb2d53vl19soHTq4t3oM9xmrLcWaAqXNI74BdQ/38BrFatNWZT1n2IwdDLCZhRjaRClOiuEuSiL8BeXMxQ+kPoy5oaktJ6xKac1zzvgB5Seug6BR4GK9+4Ao9D4oP+fe9NGbKN1+yNZ8GjtzKWjplNbYWnkyqgZHrqsWsHa5nTKs4ewTyUbNfMnsvCdyPoQruKRMgGbWe5OigkYptoSU6qOvgZNinz9S7QNH/+xOT+ktlK7VlZHhtJVCXpFSkmV2+QYVHnDg+mrDM1V6d3QZK6e0HSn7XIilfqg9VsT0Kykln5OWe8s6JWTcjFso1bIraAOSPrAipbYH34f5a/Bn6uhKYOmq6/tXhuOY6JCUdlz1wUOcIK8VuR7XUUrP3dUqodXqzpSHWygtPD5M3L24WKRUyFFSBqUgBMp3ozS4nq4v0WpLDUtK9TgQurW+cks1yOsojUBCLgrOGaw82/sE/hso3euUYqdGlZTab3AhFVVTS+RVo+KDwlaAtJObSFA6LTjYaX5a00MSX24l11Ga6J0jBLCaru+To26gdKq/vGDxa0pJjpI5GQxm+oi6i4JQ538NHT/ayjARlBZzY2Xah9WezFmj8OtVlFKQSd/Vm09wltTu2vNvUUj1Qr+l1NvBlS6uTLT20reaC7r9qJfq6I2USonS0cWgEcF2HC/phmkL4lWU0gqTFjFVZ9If4hMppdW2zZTi8kkvMgsFuFbawZFNlJYkyjBNN35ZJopAcBWlZOSpwO4ud+lnUhpP4BJuLjF8ltuRopAJJiXEYkaUHksekB1Vm5i1HufL7VWUUtcq0P3PUlpzLHkfDQtpPq8cpcCHNkpLA2ua7DhUb0klhdeN0r+VUtxAQfjKgMKFVJXQCLVul0Lfni4N2QDPDZeKVWQiencVpWSKLW9+9Blr6eExlJK+dFYRSDzPBxzd/dMlRCpItBDGvar913Yi1p8JE5JQja+iNHyFa2/MLcN9HhOiVJcPyaJxN6W1BPd1RhnE7fw5aTH7pYlCmqB/gdBPsGHZvevk0gZcq4yTugcedlu3FZN+fj+l9G42Hlr5lY2GZKrWr04QuIbSM/xBXe3JdZTiwvPyACP+BWgG6GrEx8uDKK1lqCR8wGNq6h/+0rl4JkUfupLSmg9bn9AprqOUZkm/uBGFDwg3Q+FGyzt3UA5+BKUxbvQ/1xcPRTNhUlQ20zy2tpLSU017cK9/DaX6JCfvWKeQbx/3u/cHRdLRE2let0dmy0dQWvPhKkrmTY2cmBpRa7U/FtZ6IAxBVZRm2/qrapuKlzCJqyc+PM9C54qkke2HejE6v5zW3acaCD1imWEn7WAupOhHUBrkXtWCjSCmbeUofdd2cIIVTsgFFZTGXABanCLRuxDXEGFmvKSURg0aA2yKtSDjo7V15XLezGA1SO9Og6DRYm1XWRRErJa7Ix9BKYm4HMVUrWwvGmZB7MR+cqKm6zSeyikVp2MtXrOo4Tixi+9B7rCXlGJPrdGBRW42nxH3DpogrHWXRbHjNCJ2JPXjPn20lo8WHu+x2Konzj2CUuG6t6x9cULZsVBKR7NJazKTPtLVL
              0dpILWm+jZttXr0VRpXLikl+835AfftdW4OdXuynl6rlUq1oXf/appdema7j6NUeO1KDrGya7qiTwr+XBSsmPjNMk+ytRLFLimtMU37lY4IlpZVNLnb61zTbWWAo/04SklaKhGXuJwu2REWE2sY/nbHZ1ocEaIvV8QSSsO3UkprSUmIxfjulRSfWjMivGyC63X8F0mpGhOlgrh+KhXqpUWJCF0/Z4pcKmOiCvDYs7pAndWyeV67GhMl+/CuROooKWPxqTDip+Gjjtrya6mYg+0uC+3BSLMeBFtuTZjopMQ9xcLB1TC4p+Qd4zlBFf4czaI07GrWZG8HVZaJ+g7bpGLtrS/6TNn5mkt+V1tfED2/R5N//6z2xHZXMznkR+kpusuer8FusNP4edntx24TWtKtBwH/WhxmMb+Y98+De8oqZxyVTXtR8t59mrS6myQqDJHqKvG0jNX4eBzPiyc+NMEMUywfJ/breLxxi4Gxoc8Gu9bk6bkflnmy7oLtNZ3m9+T8hU0ndrzbnyf0PO+G2JCworDtnZtvmjPKDQwMDAwMDG6B7Th6KKtE7Pt+WF5Uk3h4WGyoFPKjwHd+IZGEcRAF8YXG7xSbE4XPwm8jL623VqwgD8rmkD81tW+fDHv1hOHWT8uxE6l9DXqz2Ux1v8qivGwoFQGv+9R6ErkHNd9bTrfbaevAKixkNntNF9tFunP1f6viT87NjQtkeefC2/1+m/aFWuUdz63tyjiNW+cKhF3uNDn3siXk/WB57vnkq+ROaSji2B6UHC/wtynhoXpRa/hGgSMRVwwXpP8zmaowGpcqTM5KauczVZ9GK2gh/IntpKlqvUTrAZzSXhataIe8mDDOYFjhkiIAdwXV/nOh86SkyFB46NyuKmodsSxQSoHLTLVCDEssEOFGrUGx9VI877s6/vTIpz38BFyVsUPWEjIhkmsJNUyIyq9/2cFaRZ6E2VH4EWZBZVEqq1Da1IxlwxJTLtPMcgqBGFiqOYiYlrhHtqxKSqlmMa3Am4KRqRGYRXdfdpo78gRxgHWVh1jM4CKlEDOIwwfnn0IpOMfXx8NmuVeTbYqtLd4PYx4kMsnrdoRrIQ8toVzEUas/nvDFAhOSqiil6MZ8WmGM+ltIIS/bRxiWrwM+ZODHjSiCVY5mPgQycpLz4AVZ9FwWfRz4kDml4N09RqHtsPfOuGRYwIvq/Axtz3fTkWJbhZAp3px0DYvgnw/H8+KPZ2tIa2kFpZCtwisQVl1anDPi9r4o3JuAPMEEbII7HPd4eOkvfOjk1ngsil1DPy/0U6EUorVbDFOTy3Z8SM9b/wCyY2WOQ8jUmrcprfEYJv1E87ixIUoqKMUoduigqNaHefbswvBdfuH5BgqlIdjyUY6Blz6BRBYZkKFSih6yU5FSWDvSOfMrJCg0/Y92rqubJl2+raWQ8iXCpMH5/iK97GLVraAUNtMpRGDIaYUjH+ppf0agThUUSmOgCYYDvnTPXSgLvkZpBhs0+DwVSsm7a3WmOzcgzsKAAPUKF/RwclAilzEpdAD/vopC0TBf7PKkh3JKcTN9i/jAlHFOKF3ArjX4Sjsw8hQFge+e1pIm4GYRYcCUiOrDomCix4gi3MoUSuU/oOJrmgeUheMpAQ5MEP/0i3M3ll5oP4VXh8snBkbgNLj0qpZTCv1pM3w1clq5orHJlwlQHMgTf2QUKYEbu8k/vnu1jO9YYsHHouR348BlV5VLvZXi3oWU5TwoHkurjt6FDNwH+pooNqEchTv4ZexsOaWwmXYdXEBy9STCjn5KfF41CsJmHeKW4KWPPsIwWMIYvigKrE7wukrpWd3c5dI+dz0UKa35p1TSTts7xLh2zs01duI2auwyTL+UUhjS9cwLY9hhZbBsk2Ixv9b9o1PawUUn0/3kLadQFCIYdjQYNErBO9cn0jhjOaXChW3HbCAiwrGKTPcgA9G4hswu96EySllbqyD3jkOM0PaL/xuOSunoKVHWsRw0cbDoer2G6TQQuSEapWAkChsfUJTnNob9GWYUzVDXsvlttuM6QCrshRTiKoH5JJiCJ00rDgkCZZTaK70CKUdV61qfCeRpPN6NX+2ExI+kXegiDjCxPWWwi3TEQqhS6vb6GKWYcKlyzx8tFJlvyOhpijt9CEo4LAZuMSAHpjuqb5SubrPlkpaZEpKCwpkref4wlL4zJfRmIE9OU/He4kvfY3bFnq8BuOBLISqAp00vJz5fC6e2GzuNH6Py4cFGVmf84cdOApVx7RG3aUrm2POxCXIUbpHW0HZ937XPEsgR1V9O0lRmTXDybadYgdyPvpFSbf2Gl97+HyZ3ZGAJGeQ7Bv+Eix8dQpJTSkdbDHstzFu8TMLGLIjOdPKU57+CBNX5Sc1BG3BegYjFHs5mGI8C1QFJ6xHhhQ9o2EzrPzEphb3n0+q/Q6mj0QFKJiz4OaWYxEMnHuSUxnok3PoiTsQe6IcIPfMJCiqXjJiCnRHlKBmsSABTYKSHxPEpDrfIrEjQmcQxNf8RSlGMl3SgIdOtadpTAGWmRe3JHSuiQr3kn/eGDdUEOuOD1AErXCHuDv0wiXro0PodJK5LShXdmANtWvT1eyjdSZ4IIHfn0gvqkDzEDCnFqzj1cdzAskmiPluKrW0alkqD0WFKI3W0gzfidizVTIq2YzpBLj6JjWfdIydOpG+dZ0ohbFw9nAJax0Fb6QP4VJzmg8Fcs2Ec9AvhgMMWRemqff6MxWz+cz5I3GZ/2Vr2pY5fROiz1bHVOg5Ix7cPeaU1UZ1o3/aT11Zv8rxhsfqzxPxUUsEpr8AeHOaH4jEKnw+7eNJl8YItL6i/6Fe1s0cqfZiigKe6WKubo9riWE1FsTX8roJi3wwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz+Sfwf+x831GD3bsMAAAAASUVORK5CYII=" alt="" class="responsive-img"/>
            </a>
            
          </div>

          <div class="center-align col s4 m3 l2 xl2">
            <a href="https://www.universite-paris-saclay.fr/fr"> 
              <img src="http://unice.fr/prepite-paca/menus/en-tete/investissement-avenir/leadImage_large" alt="" class="responsive-img"/>
            </a>
          </div>
        </div>
          
          <div className="row">
          <div class="offset-s2 offset-m3 offset-l3 offset-xl4 col s9 m5 l6 xl4">
            <a href="https://www.mycanal.fr/"> 
              <img src="https://www.vivendi.com/wp-content/uploads/2018/01/Canal-Groupe-VF-blanc-sans-cartouche-e1527750370787.png" alt="" class="responsive-img"/>
            </a>
          </div></div>

          <div className="row">
          <div class="offset-s3 offset-m3 offset-l3 offset-xl4 col s9 m6 l5 xl4 ">
            <a href="https://group.bnpparibas/"> 
              <img src="https://www.cisl.cam.ac.uk/business-action/sustainable-finance/banking-environment-initiative/images/members-logos/bnp-paribas-logo.png/image" alt="" class="responsive-img"/>
            </a>
          </div></div>

          <div className="row">
          <div class="offset-s2 offset-m3 offset-l3 offset-xl4 col s9 m6 l4 xl4">
            <a href="https://association.centraliens.net/"> 
              <img src="https://association.centraliens.net/medias/image/8537391815b914d86ec85e.png" alt="" class="responsive-img"/>
            </a>
          </div></div>

          <div className="row">
          <div class="offset-s3 offset-m4 offset-l4 offset-xl5 col s6 m4 l3 xl3">
            <a href="https://www.facebook.com/federationACS/?ref=br_rs"> 
              <img src="https://hyris.tv/img/facs.png" alt="" class="responsive-img"/>
            </a>
          </div></div>

          <div className="row">
          <div class="offset-s3 offset-m4 offset-l4 offset-xl5 col s6 m4 l3 xl3">
            <a href="https://hyris.tv/"> 
              <img src="http://www.bde.campus.ecp.fr/img/logo%20hyris.png" alt="" class="responsive-img"/>
            </a>
          </div></div>



        </div>
      </div>
    );
  }

  export default Contacts;
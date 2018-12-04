import React, { Component } from 'react';
import { Link } from "react-router-dom";



class Footer extends Component {
    render() {
      return (
       

    <div>
      <footer className="page-footer teal">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">L'équipe organisatrice</h5>
                <p className="grey-text text-lighten-4">Tous membres de l'association audiovisuelle Hyris, 
                  nous sommes heureux de reprendre l'organisation de ce festival, 
                  pour en faire avec vous un événement execptionnel. <br/>
                  
                </p>
              </div>

          

              <div className="col l3 s12">
                <h5 className="white-text">Nous contacter : </h5>
                <ul>
                  <li><a className="white-text" href="https://www.facebook.com/LeRusHyrisTV/">Facebook</a></li>
                  <li><Link to="contacts" className="white-text">Page contacts</Link></li>
                  <li><a className="white-text" href="https://hyris.tv/">Site de Hyris.tv</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            Made by <a className="brown-text text-lighten-3" href="http://materializecss.com">Materialize</a>, powered by <a className="brown-text text-lighten-3" href="https://reactjs.org/">React.JS</a>.
            <Link to="/membre" className="white-text right">Accès Membre</Link>
          </div>

          </div>
        </footer>
    </div>
    )
    }
}
    

        
      
export default Footer;
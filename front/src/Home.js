import React, { Component } from 'react';
import { Link } from "react-router-dom";




class Home extends Component {
  


  
  
  render() {
    return (
        <div>


            <div id="index-banner" className="parallax-container">
                <div className="section no-pad-bot">
                    <div className="container">
                        <br></br>
                        <h1 className="header center teal-text text-lighten-2">Le Rush</h1>
                        <div className="row center">
                            <h5 className="header col s12 light">
                                Un festival de courts-métrages étudiants le temps d’un week-end rassemblant un concours
                                entre
                                associations d’audiovisuel et des activités autour du cinéma pour le public.
                            </h5>
                        </div>
                        
                        <br></br>
            
                    </div>
                </div>
                <div className="parallax opacite"><img src="IMGLens.jpg" alt=""></img></div>
            </div>


            <div className="container">
                <div className="section">
                    <div className="container">
                        <h1 className="header center teal-text text-lighten-2">Save the Date !</h1>
                        <div className="row center">
                            <h5 className="header col s12 light">
                                Le Rush 3ème édition se déroulera le week-end du 29 février - 1 mars 2020 sur le campus
                                de
                                CentraleSupélec
                            </h5>
                        </div>
                        <div className="row center">
                            <Link to="inscription" id="download-button"
                                className="btn-large waves-effect waves-light teal lighten-1 pulse">Inscription</Link>
                        </div>

                    <br/>
                    <br/> 
                    </div>
                    <div className="row">
                        <div className="header center s12 m4">
                            <img alt="GIFRush" class="responsive-img" weight="640" height="480"
                                src="./GIFcomRush.gif" />
                        </div>
                        <div className="col s12 m4">
                            <div className="icon-block">
                                <h2 className="center brown-text"><i className="material-icons">location_city</i></h2>
                                <h5 className="center">CentraleSupélec</h5>

                                <p className="light justifier">
                                    Le festival se déroule sur le campus de CentraleSupélec qui comprend des
                                    installations de
                                    pointe.
                                    Vous y serez nourris et logés durant tout l'événement.
                                </p>
                            </div>
                        </div>

                        <div className="col s12 m4">
                            <div className="icon-block">
                                <h2 className="center brown-text"><i className="material-icons">group</i></h2>
                                <h5 className="center">Un moment de partage</h5>

                                <p className="light justifier">
                                    Retrouvez vous avec plusieurs équipes audiovisuelles venant de toute la France.
                                    Mesurez vous à eux sans relâche durant la compétition, puis vous pourrez échanger
                                    avec eux
                                    durant le DéRush, à la fin du festival.
                                </p>
                            </div>
                        </div>

                        <div className="col s12 m4">
                            <div className="icon-block">
                                <h2 className="center brown-text"><i className="material-icons">camera</i></h2>
                                <h5 className="center">Repoussez vos limites</h5>

                                <p className="light justifier">
                                    Le Rush est l'occasion parfaite de montrer ce que vous savez faire, mais aussi
                                    d'expérimenter de nouvelles techniques afin d'arriver en première place.
                                </p>
                            </div>
                        </div>
                        <br></br>
                    </div>

                    <div className="row center hide-on-small">
                            <Link to="deroulement" id="download-button"
                                className="espaceDroite btn-large waves-effect waves-light teal lighten-1">Déroulement
                            </Link>
                            <Link to="inscription" id="download-button"
                                className="espaceDroite btn-large waves-effect waves-light teal lighten-1">Inscription
                            </Link>
                            <Link to="contacts" id="download-button"
                                className="espaceDroite btn-large waves-effect waves-light teal lighten-1">Contact
                            </Link>
                
                        </div>
                </div>
            </div>



            <div id="index-banner" className="parallax-container">
                <div className="section no-pad-bot">

                </div>
                <div className="parallax"><img className="zoomout"
                        src="https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/43382026_1860593300642629_1343849757444931584_o.jpg?_nc_cat=101&_nc_ht=scontent-cdt1-1.xx&oh=9e7209515982f6c76f196512a7a48389&oe=5C72A26B"
                        alt="Unsplashed background img 3"></img></div>
            </div>

            <div className="parallax-container valign-wrapper">
                <div className="section no-pad-bot">
                </div>
                <div className="parallax"><img src="IMGAcceuil.jpg" className="zoomout" alt="Le Rush logo"></img></div>
            </div>
        </div>
    );
  }
}





export default Home;
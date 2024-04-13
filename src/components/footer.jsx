import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container-fluid">
                <div className="row justify-content-center align-items-center p-4 gx-7">

                    <div className="col-md-3 d-flex row link pt-4">
                        <h3>John Doe</h3>
                        <ul className='list-unstyled'>
                          <li className='my-2'><i class="fa-solid fa-location-dot fa-2xs mx-2"></i><a href="https://maps.app.goo.gl/dz17qAS3pxiKengK6" target="_blank" rel="noopener noreferrer">40 Rue Laure Diebold 69009 Lyon, France</a></li>
                          <li className='my-2'><i class="fa-solid fa-phone fa-2xs mx-2"></i><a href="tel:+33607080910">06 20 30 40 50</a></li>
                          <p className='m-0'>
                              
                              <div className='my-2 justify-content-center link'>
                                <a className='m-2' href="https://github.com/github-john-doe" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                                <a className='m-2' href="https://twitter.com/twitter-john-doe" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
                                <a className='m-2' href="https://www.linkedin.com/in/linkedin-john-doe/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>  
                              </div>
                          </p>
                        </ul>
                    </div>
                    <div className="col-md-3 d-flex row link pt-4">
                        <h3>Liens utiles</h3>
                        <ul className='list-unstyled'>
                            <li className='my-2'><i class="fa fa-angle-right fa-2xs mx-1"></i><Link to="/home">Accueil</Link></li>                          
                            <li className='my-2'><i class="fa fa-angle-right fa-2xs mx-1"></i><Link to="/contact">Contact</Link></li>
                            <li className='my-2'><i class="fa fa-angle-right fa-2xs mx-1"></i><Link to="/service">Service</Link></li>
                            <li className='my-2'><i class="fa fa-angle-right fa-2xs mx-1"></i><Link to="/legalNotice">Mentions légales</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3 d-flex row link pt-4">
                        <h3>Mes dernières réalisations</h3>
                        <ul className='list-unstyled '>
                            <li className='my-2'><i class="fa fa-angle-right fa-2xs mx-1"></i><a href="/achievement#portfolio">Portfolio</a></li>
                            <li className='my-2'><i class="fa fa-angle-right fa-2xs mx-1"></i><a href="/achievement#maquette">Maquettage</a></li>
                            <li className='my-2'><i class="fa fa-angle-right fa-2xs mx-1"></i><a href="/achievement#javascript">Fonctionnalité Javascript</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 d-flex row link pt-4">
                        <h3>Mes derniers articles</h3>
                        <ul className='list-unstyled'>
                            <li className='my-2'><i class="fa fa-angle-right fa-2xs mx-1"></i><a href="/blog#article-1">Démystifier le JavaScript moderne</a></li>
                            <li className='my-2'><i class="fa fa-angle-right fa-2xs mx-1"></i><a href="/blog#article-2">Le guide ultime du SEO pour le e-commerce</a></li>
                            <li className='my-2'><i class="fa fa-angle-right fa-2xs mx-1"></i><a href="/blog#article-3">Sécurité web : Protéger votre e-commerce contre les cybermenaces</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 container-fluid text-center bg-secondary link">
                        <p className='m-0 p-2'>&copy; 2024 John Doe. Tous droits réservés.</p>
                    </div>
                    <p className="text-center"><a href="#" id="back-to-top">Remonter en haut de la page</a></p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row justify-content-center align-items-center p-4 gx-7">
                    <div className="col-md-3 d-flex row text-center link pt-4">
                        <h3>John Doe</h3>
                        <a href="https://maps.app.goo.gl/dz17qAS3pxiKengK6" target="_blank" rel="noopener noreferrer">58 Rue Jean Hameau, 33300 Bordeaux</a>
                        <p className='m-0'>
                            <a href="tel:+33607080910">06 07 08 09 10</a>
                            <div className='d-flex justify-content-center link'>
                              <a className='m-2' href="https://github.com/github-john-doe" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                              <a className='m-2' href="https://twitter.com/twitter-john-doe" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
                              <a className='m-2' href="https://www.linkedin.com/in/linkedin-john-doe/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>  
                            </div>
                        </p>
                    </div>
                    <div className="col-md-3 d-flex row text-center link pt-4">
                        <h3>Pages</h3>
                        <ul className='list-unstyled'>
                            <li><a href="/">Accueil</a></li>
                            <li><a href="/contact">Contact</a></li>
                            <li><a href="/service">Service</a></li>
                            <li><a href="/legalNotice">Mentions légales</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 d-flex row text-center link pt-4">
                        <h3>Dernières réalisations</h3>
                        <ul className='list-unstyled'>
                            <li><a href="/projects/project-1">Projet 1</a></li>
                            <li><a href="/projects/project-2">Projet 2</a></li>
                            <li><a href="/projects/project-3">Projet 3</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 d-flex row text-center link pt-4">
                        <h3>Derniers articles</h3>
                        <ul className='list-unstyled'>
                            <li><a href="/blog/article-1">Article 1</a></li>
                            <li><a href="/blog/article-2">Article 2</a></li>
                            <li><a href="/blog/article-3">Article 3</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center link">
                        <p>&copy; 2024 John Doe. Tous droits réservés.</p>
                        <p><a href="#" id="back-to-top">Remonter en haut de la page</a></p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

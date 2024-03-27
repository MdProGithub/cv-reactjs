import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row justify-content-center align-items-center link">
                    <div className="col-md-3">
                        <h4>John Doe</h4>
                        <p>12 rue de Rue</p>
                        <p>
                            <a href="tel:+33607080910">06 07 08 09 10</a><br />
                            <a href="https://github.com/github-john-doe" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                            <a href="https://twitter.com/twitter-john-doe" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href="https://www.linkedin.com/in/linkedin-john-doe/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                        </p>
                    </div>
                    <div className="col-md-3">
                        <h4>Pages</h4>
                        <ul>
                            <li><a href="/">Accueil</a></li>
                            <li><a href="/about">À propos</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h4>Dernières réalisations</h4>
                        <ul>
                            <li><a href="/projects/project-1">Projet 1</a></li>
                            <li><a href="/projects/project-2">Projet 2</a></li>
                            <li><a href="/projects/project-3">Projet 3</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h4>Derniers articles</h4>
                        <ul>
                            <li><a href="/blog/article-1">Article 1</a></li>
                            <li><a href="/blog/article-2">Article 2</a></li>
                            <li><a href="/blog/article-3">Article 3</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p>&copy; 2024 John Doe. Tous droits réservés.</p>
                        <p><a href="#" id="back-to-top">Remonter en haut de la page</a></p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

import porfolioBootstrap from '../images/porfolioBootstrap.png';
import maquetteFigma from '../images/maquetteFigma.png';
import espaceCom from '../images/espaceCom.png';

const Achievement = () => {
    return(
        <div>
            <div className='row  justify-content-center m-4'>
              <div className="col-md-5 m-4 card justify-content-center">
                <img src={porfolioBootstrap} className="card-img-top" alt="site web portfolio conçu avec la librairie Bootstrap" />
                <div className="card-body text-center">
                  <h5 className="card-title">Portfolio</h5>
                  <p className="card-text">Site portfolio élégant, conçu avec Bootstrap et HTML pour mettre en valeur les projets et talents de notre client de manière professionnelle et réactive.</p>
                  <a href="https://github.com/MdProGithub/bootstrap1" className="btn btn-primary">Voir</a>
                </div>
              </div>

              <div className="col-md-5 m-4 card justify-content-center">
                <img src={maquetteFigma} className="card-img-top" alt="Prototype d'un site e-commerce fait sur Figma" />
                <div className="card-body text-center">
                  <h5 className="card-title">Maquettage</h5>
                  <p className="card-text">Prototype de site web conçu avec Figma, offrant une prévisualisation interactive des fonctionnalités et du design avant le développement.</p>
                  <a href="https://github.com/MdProGithub/Probeats_FIGMA" className="btn btn-primary">Voir</a>
                </div>
              </div>

              <div className="col-md-5 m-4 card justify-content-center">
                <img src={espaceCom} className="card-img-top" alt="Prototype d'un site e-commerce fait sur Figma" />
                <div className="card-body text-center">
                  <h5 className="card-title">Fonctionnalité JS</h5>
                  <p className="card-text">Site web moderne avec un système de commentaires dynamique, conçu pour une interaction utilisateur simple et efficace.</p>
                  <a href="https://github.com/MdProGithub/formulaire" className="btn btn-primary">Voir</a>
                </div>
              </div>
            </div>
        </div>
            
    )
}

export default Achievement;
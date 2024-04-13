import Decrypt from "../images/demistiferJS.jpeg"
import guideEcommerce from '../images/commerce.jpeg'
import uxcommerce from '../images/uxcommerce.jpeg'
import iabigdata from '../images/iabigdata.jpeg'
import cybersecurity from '../images/cybersecurity.jpeg'
import optimisationWeb from '../images/optimisationWeb.jpeg'

const Achievement = () => {
    return(
        <div>
         <div id="article-1" className="row justify-content-center m-4">
          <div class="col-md-3 col-sm-5 col-7 m-4 card">
            <img src={Decrypt} class="card-img-top" alt="..."/>
            <div class="card-body text-center">
              <h5 class="card-title">Démystifier le JavaScript moderne</h5>
              <p class="card-text">Dans le monde en constante évolution de la programmation web, JavaScript continue d’être un pilier central. 
              Dans ce blog, nous explorerons les dernières tendances et technologies en JavaScript, y compris les frameworks populaires comme React, Vue et Angular.
              </p>
              <a  target='_blank' className="btn btn-primary">Lire</a>
            </div>
          </div>

          <div id="article-2" class="col-md-3 col-sm-5 col-7 m-4 card">
            <img src={guideEcommerce} class="card-img-top" alt="..."/>
            <div class="card-body text-center">
              <h5 class="card-title">Le guide ultime du SEO pour le e-commerce</h5>
              <p class="card-text">
              Le SEO est crucial pour toute entreprise de e-commerce cherchant à augmenter sa visibilité en ligne. 
              Nous discuterons des meilleures pratiques de SEO spécifiques au e-commerce et comment les mettre en œuvre sur votre site.
              </p>
              <a  target='_blank' className="btn btn-primary">Lire</a>
            </div>
          </div>

          <div id="article-3" class="col-md-3 col-sm-5 col-7 m-4 card">
            <img src={uxcommerce} class="card-img-top" alt="..."/>
            <div class="card-body text-center">
              <h5 class="card-title">Sécurité web : Protéger votre e-commerce contre les cybermenaces</h5>
              <p class="card-text">La sécurité est une préoccupation majeure pour tout site de e-commerce. 
              Nous discuterons des mesures que vous pouvez prendre pour protéger votre site contre les cybermenaces.
              </p>
              <a  target='_blank' className="btn btn-primary">Lire</a>
            </div>
          </div>

          <div id="article-4" class="col-md-3 col-sm-5 col-7 m-4 card">
            <img src={iabigdata} class="card-img-top" alt="..."/>
            <div class="card-body text-center">
              <h5 class="card-title">L’avenir du business web : IA et Big Data</h5>
              <p class="card-text">L’IA et le Big Data transforment le paysage du business web. 
              Découvrez comment ces technologies peuvent aider votre entreprise à prendre des décisions éclairées et à rester compétitive.
              </p>
              <a  target='_blank' className="btn btn-primary">Lire</a>
            </div>
          </div>

          <div id="article-5" class="col-md-3 col-sm-5 col-7 m-4 card">
            <img src={cybersecurity} class="card-img-top" alt="..."/>
            <div class="card-body text-center">
              <h5 class="card-title">Sécurité web : Protéger votre e-commerce contre les cybermenaces</h5>
              <p class="card-text">La sécurité est une préoccupation majeure pour tout site de e-commerce. 
              Nous discuterons des mesures que vous pouvez prendre pour protéger votre site contre les cybermenaces.
              </p>
              <a  target='_blank' className="btn btn-primary">Lire</a>
            </div>
          </div>

          <div id="article-6" class="col-md-3 col-sm-5 col-7 m-4 card">
            <img src={optimisationWeb} class="card-img-top" alt="..."/>
            <div class="card-body text-center">
              <h5 class="card-title">Optimisation des performances web pour votre e-commerce</h5>
              <p class="card-text">Un site web rapide et réactif est essentiel pour garder vos clients engagés. 
              Nous explorerons les techniques d’optimisation des performances pour rendre votre site de e-commerce aussi rapide que possible
              </p>
              <a  target='_blank' className="btn btn-primary">Lire</a>
            </div>
          </div>
         </div>
        </div>
    )
}

export default Achievement;
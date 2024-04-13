import {useEffect, useState} from 'react'

const Home = () => {

    function JhonDoe() {
        const [userData, setUserData] = useState(null);
      
        useEffect(() => {
          fetch('https://api.github.com/users/github-john-doe')
            .then(response => response.json())
            .then(data => {
              setUserData(data);
            })
            .catch(error => {
              console.error('Erreur lors de la récupération des données:', error);
            });
        }, []);
      
        if (!userData) {
          return <div>Chargement en cours...</div>;
        }

        return (
            <div className="container-fluid">
              <div className=' d-flex row justify-content-center align-items-center bg-EEE p-5 ' id='apropos'>
                <div className='col-md-3 align-items-center justify-content-center'>
                 <img className='img-fluid rounded mx-auto d-block' src={userData.avatar_url} alt={userData.login} /> 
                </div>
                
                <div className='col-md-6 text-center'>
                    <h2 className='my-4'>À propos</h2>
                    <hr />
                    <p>
                      Passioné par l'informatique et les nouvelles technologies,
                      j'ai suivie une formation d'<strong>intégrateur-dévéloppeur web</strong> au CEF.
                       Au cours de cette formation, j'ai pu acquérir des bases solides
                      pour travailler dans le domaine du <strong>développement web</strong>
                      <br /> <br />
                      Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour
                      consolider ma formation de <strong>developpeur web full stack</strong>.
                      <br /> <br />
                      J'accorde une attention particulière à la qualité du code que j'écris et je respecte
                      les bonnes pratiques du web.
                    </p>
                    <div className='container '>
                    <div class="progress my-4 bg-secondary" role="progressbar" aria-label="Danger example" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-bar bg-danger" style={{width: '90%'}}>HTML 90%</div>
                    </div>
                    <div class="progress my-4 bg-secondary" role="progressbar" aria-label="Info example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-bar bg-info text-dark" style={{width: '80%'}}>CSS 80%</div>
                    </div>
<                    div class="progress my-4 bg-secondary" role="progressbar" aria-label="Warning example" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-bar bg-warning text-dark" style={{width: '70%'}}>Javascript 70%</div>
                    </div>
                    <div class="progress my-4 bg-secondary" role="progressbar" aria-label="Success example" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-bar bg-success" style={{width: '60%'}}>PHP 60%</div>
                    </div>
                    <div class="progress bg-secondary" role="progressbar" aria-label="Primery example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-bar" style={{width: '50%'}}>React 50%</div>
                    </div>
                    </div>
                 </div>                   
                </div>
            </div>
        );
    }
      
    return (
        <div className="container-fluid" style={{padding:'0'}} >
            <div className="container-fluid d-flex justify-content-center align-items-center text-center p-4 img">
                <div>
                  <h1 className="z-index">Bonjour, je suis Jhon Doe</h1>
                  <h2 className="z-index">Développer web full stack</h2>                 
                  <button type="button" class="btn btn-outline-secondary z-index"><a href="#apropos" style={{textDecoration:'none'}} >En savoir plus</a></button> 
                  <div className="backcolor"></div>
                </div>  
            </div>
            <JhonDoe />  
        </div>
    )
}

export default Home ;

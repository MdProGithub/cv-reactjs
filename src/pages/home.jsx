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
                    <h2>À propos</h2>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit harum aut ipsum, animi adipisci repudiandae nihil aliquid eos facilis. Illo laudantium et voluptatem nulla minus voluptas cupiditate nesciunt non nihil?
                    </p>
                    <div className='container '>
                      <div className="progress mb-2 bar-bg" role="progressbar" aria-label="Example with label" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                          <div className="progress-bar " style={{width: '85%'}}>Javascript</div>
                      </div>
                      <div className="progress mb-2" role="progressbar" aria-label="Example with label" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                          <div className="progress-bar" style={{width: '100%'}}>HTML</div>
                      </div>
                      <div className="progress mb-2" role="progressbar" aria-label="Example with label" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                          <div className="progress-bar" style={{width: '100%'}}>CSS</div>
                      </div>
                      <div className="progress mb-2" role="progressbar" aria-label="Example with label" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                          <div className="progress-bar" style={{width: '95%'}}>Bootstrap</div>
                      </div>
                      <div className="progress mb-2" role="progressbar" aria-label="Example with label" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                          <div className="progress-bar" style={{width: '98%'}}>Figma</div>
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
                  <h1 className="z-index">Portfolio</h1>
                  <h2 className="z-index">Jhon Doe</h2>                 
                  <button type="button" class="btn btn-outline-primary z-index"><a href="#apropos" style={{textDecoration:'none'}} >En savoir plus</a></button> 
                  <div className="backcolor"></div>
                </div>  
            </div>

            <JhonDoe />  
        </div>
    )
}

export default Home ;

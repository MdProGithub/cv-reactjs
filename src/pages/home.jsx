import backgroundImage from '../../public/images/dark-blue-and-black-aesthetic-waves-44u0sm9mmequ39c9.jpg'

const Home = () => {
    return (
        <div className="container-fluid" style={{padding:'0', backgroundImage: `url(${backgroundImage})`}} >
            <div className="p-5 text-center img">
                <h1>Portfolio</h1>
                <h2>Jhon Do</h2>
                <button type="button" class="btn btn-outline-secondary">En savoir plus</button>
               
            </div>
            


            <div className="apropos">
               <p>A propos</p> 
            </div>
        </div>
    )
}

export default Home ;
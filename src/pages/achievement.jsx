import porfolioBootstrap from '../images/porfolioBootstrap.png'

const Achievement = () => {
    return(
        <div>
            <div className="card justify-content-center m-4" style={{width: "18rem"}}>
              <img src={porfolioBootstrap} className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title">Portfolio</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="https://github.com/MdProGithub/bootstrap1" className="btn btn-primary">Voir</a>
              </div>
            </div>
        </div>
    )
}

export default Achievement;
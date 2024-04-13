import Figmapics from '../images/figma.jpeg'
import Commercepics from '../images/commerce.jpeg'

const Service = () => {
    return (
        <div className="container-fluid">

            <div className="row p-5 bg-service">
                <div className="col-md-6 d-flex justify-content-center">
                   <img className='rounded-5 img-fluid' src={Figmapics} alt="image represant un logo figma" />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center py-5">
                   <h2 className='text-center'>Maquettage de site web</h2>
                   <p className='text-center'>Apportez une touche professionnelle à votre site web avec mes services de maquettage sur Figma.
                     Je transforme vos idées en designs <strong>interactifs</strong> et <strong>captivants</strong>, parfaitement adaptés à vos besoins.
                    </p>
                </div>
            </div>

            <div className="row p-5 bg-service">
                <div className="col-md d-flex justify-content-center">
                   <img className='rounded-5 img-fluid' src={Commercepics} alt="image represant un logo e-commerce" />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center py-5">
                   <h2 className='text-center'>Création de site E-commerce</h2>
                   <p className='text-center'>Boostez votre business en ligne avec mes services de création de site e-commerce.
                    Expert en Bootstrap, HTML et JavaScript, je vous garantis un <strong>site performant</strong>,
                   <strong>responsive</strong> et <strong>adapté à vos besoin</strong> .
                   </p>
                </div>
            </div>
                   
            
            
        </div>
    )
}

export default Service;
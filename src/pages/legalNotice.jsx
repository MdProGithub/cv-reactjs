import React from 'react';
import {Link} from 'react-router-dom'

const MentionLegal = () => {

  return (
    <div>
      <div class="accordion p-5" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Editeur du site
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <i class="fa-solid fa-user fa-2xs mx-2"></i><strong>Jhon Doe</strong>
        <hr/>
        <i class="fa-solid fa-location-dot fa-2xs mx-2"></i><a href="https://maps.app.goo.gl/dz17qAS3pxiKengK6" target="_blank" rel="noopener noreferrer">40 Rue Laure Diebold 69009 Lyon, France</a>
        <hr/>
        <i class="fa-solid fa-phone fa-2xs mx-2"></i><a href="tel:+33607080910">06 20 30 40 50</a>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Hébergeur
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>Ce site web est hébergé sur <strong>CodeSandbox</strong></p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Crédit
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>Les photos ont été recupéré sur le site web <a href="https://pixabay.com/fr/" target="_blank">Pixabay</a></p> 
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default MentionLegal;

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
        <p>Ce site web est hébergé sur <a href="https://codesandbox.io/p/github/MdProGithub/cv-reactjs/draft/goofy-silence?layout=%257B%2522sidebarPanel%2522%253A%2522GIT%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522cluy6p9gq0006356hk1mlert4%2522%252C%2522sizes%2522%253A%255B100%252C0%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522cluy6p9go0002356hzlxzzguw%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522cluy6p9gp0004356h45ghcdev%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522cluy6p9gp0005356hxdk2ia6j%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522cluy6p9go0002356hzlxzzguw%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522cluy6p9gn0001356h0pdj8sku%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252FREADME.md%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%252C%2522id%2522%253A%2522cluy6p9go0002356hzlxzzguw%2522%252C%2522activeTabId%2522%253A%2522cluy6p9gn0001356h0pdj8sku%2522%257D%252C%2522cluy6p9gp0005356hxdk2ia6j%2522%253A%257B%2522id%2522%253A%2522cluy6p9gp0005356hxdk2ia6j%2522%252C%2522activeTabId%2522%253A%2522cluy6smpa00hx356h7j1k18de%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522TASK_PORT%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522port%2522%253A3000%252C%2522id%2522%253A%2522cluy6smpa00hx356h7j1k18de%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522path%2522%253A%2522%252Fachievement%2522%257D%255D%257D%252C%2522cluy6p9gp0004356h45ghcdev%2522%253A%257B%2522id%2522%253A%2522cluy6p9gp0004356h45ghcdev%2522%252C%2522activeTabId%2522%253A%2522cluy6pcbp004b356h0x0k4k4n%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522cluy6p9gp0003356hs4cprbre%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TERMINAL%2522%252C%2522shellId%2522%253A%2522cluy6pba7001qdcgl0dzwdma3%2522%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522id%2522%253A%2522cluy6pcbp004b356h0x0k4k4n%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522CSB_RUN_OUTSIDE_CONTAINER%253D1%2520devcontainer%2520templates%2520apply%2520--template-id%2520%255C%2522ghcr.io%252Fdevcontainers%252Ftemplates%252Fjavascript-node%255C%2522%2520--template-args%2520%27%257B%257D%27%2520--features%2520%27%255B%255D%27%2522%252C%2522id%2522%253A%2522cluy6qvd400a2356hxlv6fpw5%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Afalse%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D" target='_blank'><strong>CodeSandbox</strong></a></p>
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

const Contact = () => {
    return (
        <div>
            <div class="container">
              <div class="row justify-content-center bg-contact rounded-4 m-5">
                <div class="col-md-6 m-4">
                  <form className="">                 
                    <div class="form-group d-flex flex-column z-index2">
                      <label for="nom">Nom</label>
                      <input type="text" class="form-control" id="nom" placeholder="Entrez votre nom" required/>
                    </div>
                    <div class="form-group">
                      <label for="email">E-mail</label>
                      <input type="email" class="form-control" id="email" placeholder="Entrez votre e-mail" required/>
                    </div>
                    <div class="form-group">
                      <label for="telephone">Numéro de téléphone</label>
                      <input type="tel" class="form-control" id="telephone" placeholder="Entrez votre numéro de téléphone" required/>
                    </div>
                    <div class="form-group">
                      <label for="sujet">Sujet</label>
                      <input type="text" class="form-control" id="sujet" placeholder="Entrez le sujet" required/>
                    </div>
                    <div class="form-group">
                      <label for="message">Message</label>
                      <textarea class="form-control" id="message" rows="4" placeholder="Entrez votre message" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary mt-3">Envoyer</button>
                  </form>
                </div>
              </div>
            </div>

        </div>
    )
}

export default Contact;
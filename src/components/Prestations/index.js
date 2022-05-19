import "./style.scss";

function Presations() {
  return (
    <div className="containerPrestations" id="mesPrestations">
      <div className="titlePresta">Les prestations</div>
      <div class="containerPrestaCard">
        <div class="card-container">
          <div class="card-wrapper">
            <div class="card light">
              <div class="text-overlay">
                <h2 className="titleh2">
                  Création de votre site vitrine "simple"
                </h2>
              </div>
              <div class="purchase-button-container">
                <h2 className="titleh2Price">Site vitrine simple</h2>
                <div class="price">
                  250€ <small>/ day</small>
                </div>
                <div class="details-text">
                  <span>Developpement de votre site vitrine</span>
                  <span>ou</span>
                  <span>Developpement landing page</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="containerPrestaCard">
        <div class="card-container">
          <div class="card-wrapper">
            <div class="card light">
              <div class="text-overlay">
                <h2 className="titleh2">
                  Production de Maquettes 
                </h2>
              </div>

              <div class="purchase-button-container">
                <h2 className="titleh2Price">Production de Maquettes</h2>
                <div class="price">
                  150€ <small>/ day</small>
                </div>
                  </div>
            </div>
          </div>
        </div>
      </div>

      <div class="containerPrestaCard">
        <div class="card-container">
          <div class="card-wrapper">
            <div class="card light">
              <div class="text-overlay">
                <h2 className="titleh2">
                  Projet complet
                </h2>
              </div>
              <div class="purchase-button-container">
                <h2 className="titleh2Price"> Projet complet</h2>
                <div class="price">
                 sur devis 
                </div>
                <div class="details-text">
                  <span>Conseils, Maquettes, Dévelopement</span>
                  <span>Création de votre site vitrine</span>    
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="containerPrestaCard">
        <div class="card-container">
          <div class="card-wrapper">
            <div class="card light">
              <div class="text-overlay">
                <h2 className="titleh2">
                 Correction d'un site existant
                </h2>
              </div>
              <div class="purchase-button-container">
                <h2 className="titleh2Price"> Correction d'un site existant</h2>
                <div class="price">
                 sur devis 
                </div>
                <div class="details-text">
                  <span>Conseils, Maquettes, Dévelopement</span>
                  <span>Création - Correction</span>    
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Presations;

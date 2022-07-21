import "./style.scss";

function Prestations() {
  return (
    <div className="containerPrestations" id="mesPrestations">
      <div className="titlePresta">Les prestations</div>
      <div className="containerPrestaCard">
        <div className="card-container">
          <div className="card-wrapper">
            <div className="card light">
              <div className="text-overlay">
                <h2 className="titleh2">
                  Création de votre site vitrine "simple"
                </h2>
              </div>
              <div className="purchase-button-container titleH2">
                <h2 className="titleh2Price">Site vitrine simple</h2>
                <div className="price">
                  250€ <small>/ day</small>
                </div>
                <div className="details-text">
                  <span>Developpement de votre site vitrine</span>
                  <span>ou</span>
                  <span>Developpement landing page</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="containerPrestaCard">
        <div className="card-container">
          <div className="card-wrapper">
            <div className="card light">
              <div className="text-overlay">
                <h2 className="titleh2">
                  Production de Maquettes 
                </h2>
              </div>

              <div className="purchase-button-container">
                <h2 className="titleh2Price">Production de Maquettes</h2>
                <div className="price">
                  150€ <small>/ day</small>
                </div>
                  </div>
            </div>
          </div>
        </div>
      </div>

      <div className="containerPrestaCard">
        <div className="card-container">
          <div className="card-wrapper">
            <div className="card light">
              <div className="text-overlay">
                <h2 className="titleh2">
                  Projet complet
                </h2>
              </div>
              <div className="purchase-button-container">
                <h2 className="titleh2Price"> Projet complet</h2>
                <div className="price">
                 sur devis 
                </div>
                <div className="details-text">
                  <span>Conseils, Maquettes, Dévelopement</span>
                  <span>Création de votre site vitrine</span>    
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="containerPrestaCard">
        <div className="card-container">
          <div className="card-wrapper">
            <div className="card light">
              <div className="text-overlay">
                <h2 className="titleh2">
                 Evolution d'un site existant
                </h2>
              </div>
              <div className="purchase-button-container">
                <h2 className="titleh2Price"> Evolution d'un site existant</h2>
                <div className="price">
                 sur devis 
                </div>
                <div className="details-text">
                  <span>Conseils, Maquettes, Dévelopement</span>
                  <span>Evolution</span>    
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Prestations;

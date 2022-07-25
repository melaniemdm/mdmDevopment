import './style.scss';
import {mesPrestations} from '../../datas/prestations';

function Prestations() {
  return (<section>
    <div className="containerPrestations" id="mesPrestations">
      <div className="title">Les prestations proposées</div>
     
      <div className="card-container">
        {mesPrestations.map((item,index)=> 
          <div className="card-wrapper" key={index}>
            <div className="card light">
              <div className="text-overlay">
                <h2 className="titleh2">
                  {item.namePrestation}
                </h2>
              </div>
              <div className="purchase-button-container titleH2">
                <h2 className="titleh2Price">{item.namePrestation}</h2>
                <div className="price">
                  {item.coutPrestation} <small>{item.modeFacturation}</small>
                </div>
                <div className="details-text">
                  {item.detailPrestation}
                </div>
              </div>
            </div>
          </div>




        )}

      
      </div>
     

      
   
    </div>
  </section> );
}

export default Prestations;

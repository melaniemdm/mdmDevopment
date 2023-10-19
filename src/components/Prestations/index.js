import './style.scss';
import {mesPrestations} from '../../datas/prestations';

function Prestations() {
  return <section className="sectionPrestations" id="mesPrestations">  
    <div className="titlePrestations">Mes prestations</div>
        
    {mesPrestations.map((item, index)=><div className="containerCard col-sm-4" key={index}>
      <div className="cardPrestation text-center">
        
        <div className="titlePrestation"> 
          <i className="fa fa-paper-plane" aria-hidden="true"></i>
          <h3>{item.namePrestation}</h3>
        </div>

        <div className="pricePrestation">
          <div>{item.coutPrestation}{item.modeFacturation}</div>
        </div>
        
        <div className="optionPrestation">
          <div><ul><li>{item.detailPrestation}</li></ul></div>  
        </div>
           
      </div>
    </div>
        
    )}
        
       

    
  </section>  ;

}

export default Prestations;

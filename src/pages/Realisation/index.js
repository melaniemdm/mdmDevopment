import './style.scss';
import {listeDesProjets} from '../../datas/projetsListe';
function Realisation(){
  return(<div className="containerRealisations">

    {listeDesProjets.map((item,index)=>
      <section className="cardRealisation" key={index}>
      
        <div className="cardRealisation-thumb" >
          <a href={item.lien}><img src={item.picture}className="imgProjet" alt="img" /></a>
        </div>
   
        <div className="cardRealisation-body">
          <h2 className="cardRealisation-title">{item.title}</h2>
       
          <p className="cardRealisation-description">{item.describe}
          </p>
        </div>
      
        
        
       
   
      </section>
    )}


  </div>);
}
export default Realisation;
import './style.scss';
import {listeDesProjets} from '../../datas/projetsListe';
function Realisation(){
  return(<div className="containerRealisations">

    {listeDesProjets.map((item,index)=>
      <section className="cardRealisation" key={index}>
        <a href={item.lien}>
          <div className="cardRealisation-thumb" >
            <img src={item.picture}className="imgProjet" alt="img" />
          </div>
   
          <div className="cardRealisation-body">
            <h2 className="cardRealisation-title">{item.title}</h2>
       
            <p className="cardRealisation-description">{item.describe}
            </p>
          </div>
      
        
        
       
        </a>
      </section>
    )}


  </div>);
}
export default Realisation;
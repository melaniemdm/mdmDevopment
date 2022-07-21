import './style.scss';
import { why} from '../../datas/why';

function WhyWebsite(){
    return(
      <div className="containerWhy" id="why">
         <div className="titleWhy"> Pourquoi un site vitrine?</div>
      <div className="cards-listWhy">

  {why.map((item,index)=><div className="cardWhy" key={index} >  
  <img src={item.pictureWhy} alt={item.nameWhy} className="whyImg"/>
  <div className="detailWhyCard">

  <div className='titleWhyDetail'>{item.titleWhy}</div>
  <div className='detailWhy'>{item.detailWhy}</div>
 
  
   </div>
   </div>)

  }
  
  
</div>
</div>


    
    )
}
export default WhyWebsite;



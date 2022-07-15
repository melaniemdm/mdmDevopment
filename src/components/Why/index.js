import './style.scss';
import { why} from '../../datas/why';

function WhyWebsite(){
    return(
      <div className="containerWhy" id="why">
         <div className="titleWhy"> Pourquoi un site vitrine?</div>
      <div class="cards-listWhy">

  {why.map((item,index)=><div class="cardWhy" key={index} >  
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



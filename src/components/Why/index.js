import './style.scss';
import {why} from '../../datas/why';

function WhyWebsite(){
  
  return( <section className="sectionWhy" id="why">
    <div className="titleWhy" > Pourquoi un site vitrine?</div>

    {why.map((item, index)=>   <div className="cardWhy-basic" key={index}>
      <div className="cardWhy-header headerWhy-basic">
        <h1 className='colorTitleWhy'>{item.titleWhy}</h1>
      </div>
      <div className="cardWhy-bodyWhy">
        
        <div className="cardWhy-element-hidden-basic">
          <ul className="cardWhy-element-containerWhy">
            <li className="cardWhy-element">{item.detailWhy}</li>
             
          </ul>
          
        </div>
      </div>
    </div>
    )}
  </section>
      
    
  );
}
export default WhyWebsite;



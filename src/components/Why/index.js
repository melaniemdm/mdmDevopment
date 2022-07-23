import './style.scss';
import { why} from '../../datas/why';

function WhyWebsite(){
    return(<section>
<div className="containerWhy" id="why">
 <div className="title" > Pourquoi un site vitrine?</div>
    <div class="containerWhyCard">
    {why.map((item,index)=>  <div class="card" key={index} >
            <div class="face face1">
                <div class="content">
                  
                                 <h3>{item.titleWhy}</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>{item.detailWhy}</p>
                       
                </div>

            </div>
        </div>)
}
    </div>


</div>

</section>



//       <div className="containerWhy" id="why">
//          <div className="titleWhy"> Pourquoi un site vitrine?</div>
//       <div className="cards-listWhy">

//   {why.map((item,index)=><div className="cardWhy" key={index} >  
//   <img src={item.pictureWhy} alt={item.nameWhy} className="whyImg"/>
//   <div className="detailWhyCard">

//   <div className='titleWhyDetail'>{item.titleWhy}</div>
//   <div className='detailWhy'>{item.detailWhy}</div>
 
  
//    </div>
//    </div>)

//   }
  
  
// </div>
// </div>


    
    )
}
export default WhyWebsite;



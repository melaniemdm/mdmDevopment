import './style.scss';
import { why} from '../../datas/why';

function WhyWebsite(){
  return(<section>
    <div className="containerWhy" id="why">
      <div className="title" > Pourquoi un site vitrine?</div>
      <div className="containerWhyCard">
        {why.map((item,index)=>  <div className="card" key={index} >
          <div className="face face1">
            <div className="content">
                  
              <h3>{item.titleWhy}</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
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


    
  );
}
export default WhyWebsite;



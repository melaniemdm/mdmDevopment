import './style.scss';
import voir from '../../assets/voir.webp';
import base from '../../assets/base.webp';
import elargir from '../../assets/elargir.webp';
import rassure from '../../assets/rassure.webp';
import accessible from '../../assets/accessible.webp';

function WhyWebsite(){
    return(<div className="containerWhy" id="why">
<div className="titleWhy"> Pourquoi un site vitrine?</div>

<div className="card">
  <img src={voir} alt="Augmenter votre visiblité" className="voirImg"/>
  <div className="card-content">
    <a href=" ">
      <p className="card-category">Augmenter votre visiblité sur le web pour promouvoir votre société<i className="fas fa-chevron-right fa-sm"></i></p>
    </a>
  </div>
</div>

<div className="card">
<img src={base} alt="Elargir votre base" className="baseImg" />
  <div className="card-content">
    <a href=" ">
      <p className="card-category">Elargir votre base de clientèle<i className="fas fa-chevron-right fa-sm"></i></p>
    </a>
  </div>
</div>
<div className="card">
<img src={rassure} alt="Rassurer vos clients" className="rassureImg"/>
  <div className="card-content">
    <a href=" ">
      <p className="card-category">Rassurer vos clients existants ou prospects<i className="fas fa-chevron-right fa-sm"></i></p>
    </a>
  </div>
</div>
<div className="card">
<img src={elargir} alt="Présenter votre activité" className="elargirImg" />
  <div className="card-content">
    <a href=" ">
      <p className="card-category">Présenter votre activité<i className="fas fa-chevron-right fa-sm"></i></p>
    </a>
  </div>
</div>
<div className="card">
<img src={accessible} alt=">Etre accéssible" className="accessibleImg" />
  <div className="card-content">
    <a href=" ">
      <p className="card-category">Etre accéssible à un plus large public<i className="fas fa-chevron-right fa-sm"></i></p>
    </a>
  </div>
</div>
    </div>)
}
export default WhyWebsite;



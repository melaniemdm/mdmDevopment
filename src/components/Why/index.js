import './style.scss';
import voir from '../../assets/voir.jpg';
import base from '../../assets/base.jpg';
import elargir from '../../assets/elargir.jpg';
import rassure from '../../assets/rassure.jpg';
import accessible from '../../assets/accessible.jpg';

function WhyWebsite(){
    return(<div className="containerWhy" id="why">
<div className="titleWhy"> Pourquoi un site vitrine?</div>

<div class="card">
  <img src={voir} alt="Augmenter votre visiblité" className="voirImg"/>
  <div class="card-content">
    <a href=" ">
      <p class="card-category">Augmenter votre visiblité sur le web pour promouvoir votre société<i class="fas fa-chevron-right fa-sm"></i></p>
    </a>
  </div>
</div>

<div class="card">
<img src={base} alt="Elargir votre base" className="baseImg" />
  <div class="card-content">
    <a href=" ">
      <p class="card-category">Elargir votre base de clientèle<i class="fas fa-chevron-right fa-sm"></i></p>
    </a>
  </div>
</div>
<div class="card">
<img src={rassure} alt="Rassurer vos clients" className="rassureImg"/>
  <div class="card-content">
    <a href=" ">
      <p class="card-category">Rassurer vos clients existants ou prospects<i class="fas fa-chevron-right fa-sm"></i></p>
    </a>
  </div>
</div>
<div class="card">
<img src={elargir} alt="Présenter votre activité" className="elargirImg" />
  <div class="card-content">
    <a href=" ">
      <p class="card-category">Présenter votre activité<i class="fas fa-chevron-right fa-sm"></i></p>
    </a>
  </div>
</div>
<div class="card">
<img src={accessible} alt=">Etre accéssible" className="accessibleImg" />
  <div class="card-content">
    <a href=" ">
      <p class="card-category">Etre accéssible à un plus large public<i class="fas fa-chevron-right fa-sm"></i></p>
    </a>
  </div>
</div>
    </div>)
}
export default WhyWebsite;



import './style.scss';
import imgBanner from '../../assets/banner.jpg';


function Banner(){
return(
    <div>
        <div className="containerAccroche"> Développez votre visiblité !</div>
        <div className="demandedevisTxt">Demandez un devis gratuit</div>
      <div className="containerBanner">  <img src={imgBanner} alt="paysage" class="banner"/></div></div>
)

}
export default Banner;
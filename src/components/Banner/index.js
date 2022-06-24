import './style.scss';
import imgBanner from '../../assets/banner.jpg';


function Banner(){
return(
  <div>
    <div className="bannerTxt">
        <div className="containerAccroche"> Développez votre visiblité !</div>
        <div className="demandedevisTxt">Demandez un devis gratuit</div>
        </div>
      <div className="containerBannerImg">  <img src={imgBanner} alt="paysage" /></div>
      
      
      
      </div>
)

}
export default Banner;
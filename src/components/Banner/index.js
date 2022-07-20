import './style.scss';
import imgBanner from '../../assets/banner.webp';


function Banner(){
return(
  <div>
    <div className="bannerTxt">
        <div className="containerAccroche"> Développez votre visibilité !</div>
        <div className="demandedevisTxt">Demandez un devis gratuit</div>
        </div>
      <div className="containerBannerImg">  <img src={imgBanner} alt="paysage" /></div>
      
      
      
      </div>
)

}
export default Banner;
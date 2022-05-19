import './style.scss';
import logoMe from '../../assets/logo2022.jpg';
function Footer(){

    return(
        <footer>
<div className="containerLogoFooter">
    <img  alt="logo mdm development" src={logoMe} className="logoFooter" />
</div>
<div className="containerNavFooter"><div class="container teal borderYtoX">
  <a href=" ">Home</a>
  <a href=" ">Pourquoi un site vitrine?</a>
  <a href=" ">Mes réalisations</a>
  <a href=" ">Mes prestations</a>
  <a href=" ">Me contacter</a>
</div>


</div>
        </footer>
    )
}
export default Footer;
import './style.scss';
import logoMe from '../../assets/logo2022.jpg';
function Footer(){

    return(
        <footer>
<div className="containerLogoFooter">
    <img  alt="logo mdm development" src={logoMe} className="logoFooter" />
</div>
<div className="containerNavFooter"><div class="container teal borderYtoX">
<a href="#accueil">Home</a>
  <a href="#why">Pourquoi un site vitrine?</a>
  <a href="https://melaniemdm.github.io/portfolio-melanie-mdm/#/projets">Mes réalisations</a>
  <a href="#mesPrestations">Mes prestations</a>
  <a href="#contactMe ">Me contacter</a>
</div>


</div>
        </footer>
    )
}
export default Footer;
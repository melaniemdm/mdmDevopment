import './style.scss';
import logoMe from '../../assets/logo2022.webp';


function Header(){
    return(
        <header id="accueil">
<div className="containerLogoHeader">
    <img  alt="logo mdm development" src={logoMe} className="logoHeader" />
</div>

<div className="containerNav topBotomBordersOut">
<a href="#accueil">Home</a>
  <a href="#why">Pourquoi un site vitrine?</a>
  <a href="https://melaniemdm.github.io/portfolio-melanie-mdm/#/projets">Mes réalisations</a>
  <a href="#mesPrestations">Mes prestations</a>
  <a href="#contactMe ">Me contacter</a>
</div>


        </header>
    )
}
export default Header
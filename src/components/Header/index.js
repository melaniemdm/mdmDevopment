import './style.scss';
import logoMe from '../../assets/logo2022.jpg';


function Header(){
    return(
        <header>
<div className="containerLogoHeader">
    <img  alt="logo mdm development" src={logoMe} className="logoHeader" />
</div>

<div class="containerNav topBotomBordersOut">
<a href=" ">Home</a>
  <a href=" ">Pourquoi un site vitrine?</a>
  <a href=" ">Mes réalisations</a>
  <a href=" ">Mes prestations</a>
  <a href=" ">Me contacter</a>
</div>


        </header>
    )
}
export default Header
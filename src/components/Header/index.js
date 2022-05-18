import './style.scss';
import logoMe from '../../assets/logo2022.jpg';


function Header(){
    return(
        <header>
<div className="containerLogoHeader">
    <img  alt="logo mdm development" src={logoMe} className="logoHeader" />
</div>

<div class="container topBotomBordersOut">
  <a href=" " >HOME</a>
  <a href=" ">ARTICLES</a>
  <a href=" ">PORTFOLIO</a>
  <a href=" ">ABOUT</a>
  <a href=" ">CONTACT</a>
</div>


        </header>
    )
}
export default Header
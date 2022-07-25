import './style.scss';
import logoMe from '../../assets/logo2022.webp';
import Navigate from '../../components/Navigate';

function Header() {
  return (
    <header id="accueil">
     
      <div className="containerLogoHeader">
        <img alt="logo mdm development" src={logoMe} className="logoHeader" />
      </div>
      <div className="containerTxt">
        <Navigate />
      </div>
   
    </header>
  );
}
export default Header;

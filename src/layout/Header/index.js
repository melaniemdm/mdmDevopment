import './style.scss';

import Navigate from '../../components/Navigate';

function Header() {
  return (
    <header id="accueil">
     
      <div className="containerLogoHeader">
        <img alt="logo mdm development" src='https://res.cloudinary.com/dst61tkcz/image/upload/v1658826239/mdm-devlopment/logo-site-header_ipmiqs.webp' className="logoHeader" />
      </div>
      <div className="containerTxt">
        <Navigate />
      </div>
   
    </header>
  );
}
export default Header;

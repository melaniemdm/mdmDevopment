import { HashLink as Link } from 'react-router-hash-link';
import './style.scss';



function Footer(){

  return(
    <footer>
      <div className="containerLogoFooter">
        <img  alt="logo mdm development" src='https://res.cloudinary.com/dst61tkcz/image/upload/v1658826239/mdm-devlopment/logo-site-footer_yb8wpl.webp' className="logoFooter" />
      </div>
      <div className="containerNavFooter"><div className="container teal borderYtoX">

        <Link to="/accueil">Home</Link> 
        <Link to="/accueil#why">Pourquoi un site vitrine? </Link>
        <Link to="/presentationMe">Présentation</Link>
        {/* <Link to="/presentationMe#ref">Mes Réferences</Link> */}
       
      
        <Link to="/realisation">Mes réalisations</Link>
        <Link to="/accueil#mesPrestations">Mes prestations</Link>
        <Link to="/accueil#contactMe">Me contacter</Link>

        
      </div>


      </div>
    </footer>
  );
}
export default Footer;
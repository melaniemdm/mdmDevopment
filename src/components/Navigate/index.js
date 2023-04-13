import { HashLink as Link } from 'react-router-hash-link';
import './style.scss';

function Navigate() {
  return (
    <nav>
      <div className="containerNav container teal borderYtoX">
        <Link to="/accueil">Home</Link> 
        <Link to="/accueil#why">Pourquoi un site vitrine? </Link>
        <Link to="/presentationMe">Présentation</Link>
        <Link to="/realisation">Mes réalisations</Link>
        <Link to="/accueil#mesPrestations">Mes prestations</Link>
        <Link to="/accueil#contactMe">Me contacter</Link>
      </div>
    </nav>
  );
}
export default Navigate;

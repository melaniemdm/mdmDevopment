import { HashLink as Link } from 'react-router-hash-link';
function Navigate(){
    return <div>
<div className="containerNav topBotomBordersOut">
<Link to="/accueil">Home</Link>
  <Link to="/accueil#why">Pourquoi un site vitrine?</Link>
  <a href="https://melaniemdm.github.io/portfolio-melanie-mdm/#/projets">Mes réalisations</a>
  <Link to="/accueil#mesPrestations">Mes prestations</Link>
  <Link to="/accueil#contactMe">Me contacter</Link>
</div>
    </div>
}
export default Navigate;
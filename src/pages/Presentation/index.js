import './style.scss';
import { HashLink as Link } from 'react-router-hash-link';
function presentation(){
  return ( <div className="containerPresentation">
    <div className="portfolio-container">
      <div className="hero">
        <img src="https://res.cloudinary.com/dst61tkcz/image/upload/v1674477912/mdm-devlopment/photo-Melanie.jpg_lbtlaz.png" alt="a girl smiling" className="hero--image"/>
        <div className="hero--bio">
          <h1 className="nameDev">Developpeur Java-Jcript React - Front-End</h1>
          <h3>Bonjour ! <br></br>Je m'apelle Melanie ,</h3>
          <div className="basic-info">Je suis specialisée dans <strong>le développement de sites web Front-End en JavaScript-React.</strong> <br></br>Je suis <strong> passionnée par la création, la modification de sites vitrines et par la création de flyers, de maquettes.</strong> <br></br>
          Mes technologies fétiches sont <strong> HTML, CSS, JavaScript, React, Redux...</strong><br></br>
          J'aime travailler sur des <strong>projets créatifs et passionnants, </strong>et je suis toujours à la recherche de nouveaux défis afin d'améliorer mes compétences.<br></br>
          </div>
          <nav>
            <Link to="/accueil#contactMe" className="contactMe">Me contacter</Link>

          </nav>
        </div>
      </div>
      <div className="descriptif">
        <h2 className="sousTitle"> Création de votre site en quelques étapes</h2>

        <ul>
          <li><strong>Défininition des objectifs de votre site :</strong> </li>
          <li>_ Echanges sur vos besoins, vos attentes, vos envies,</li>
          <li>_ Création du wireframe de votre futur site,</li>
          <li>_ Création de la maquette de votre futur site ou du premier prototype,</li><br key={1}></br>
          <li><strong>Planification et conception:</strong></li>
          <li>_ Choix des couleurs, de la police, des images...,</li>
          <li>_ Défininition du contenu,</li><br key={1}></br>
          <li><strong>Développement de votre futur site:</strong></li> 
          <li>_ Points réguliers sur l'avancement de votre projet,</li>
          <li>_ Intégration de vos contenus,</li><br key={1}></br>
          <li><strong>Mise en ligne:</strong> </li>
          <li>_ Choix de l'hebergeur.</li>
          <li>_ Configuration du nom de domaine.</li><br key={1}></br>
          <li><strong>Miantenance:</strong> </li>
          <li>_ Miantenance et évolution.</li>
        </ul>

        <h2 className="sousTitle"> Informations supplémentaires</h2>
        <div> Vous disposerez d'un <strong> accompagnement privilégié </strong>tout au long de votre projet. </div>
        <div> Une fois le projet terminé, je reste <strong>à votre écoute </strong>pour tout compléments d'Informations.</div>
        <div> Vous n'avez aucune gestion de la structure de site à réaliser</div>
        <div> Je réponds dans les plus bref délais à vos questions. </div>
        <div> Le referencement SEO Google est bien-sûr intégré dans la réalisation de votre site. </div>
        <div> <strong>Votre site comme vous l'avez imaginé! </strong></div>

        <h2 className="sousTitle"> Pourquoi un site vitrine?</h2>
        <div> 
          <h4>Les principaux avantages de la création d'un site vitrine sont:</h4>
          <ul>
            <li>_ Augmenter la visibilité de votre enseigne,</li>
            <li>_ Promouvoir et vous demarquer des concurrents,</li> 
            <li>_ Elargir votre clientèle et atteindre de nouveaux prospects sans aucune limite géographique</li>
          </ul>
        </div>

        <h2 className="sousTitle"><strong>Un site vitrine c'est quoi?</strong></h2>

        <div>Un site vitrine est un site Web qui présente en ligne les produits ou les services d'une organisation, dans le but d'attirer simplement l'attention et d'éveiller l'intérêt des internautes de passage, le plus souvent sans permettre d'acheter directement le produit ou le service proposé.</div>
        <a href="https://fr.wikipedia.org/wiki/Site_vitrine#:~:text=Un%20site%20vitrine%20est%20un,produit%20ou%20le%20service%20propos%C3%A9."><div>Lien Wikipédia</div></a>

        <h2 className="sousTitle"><strong>Votre site vitrine codé de A à Z</strong></h2>
        <div> Transformez votre vision en réalité avec MDM Development. Faites nous confiance  pour créer un site web de A à Z qui reflète votre entreprise et attire de nouveaux clients.  </div>

        <h2 className="sousTitle"><strong>Votre site vitrine réalisé avec CMS</strong></h2>
        <div> "Donnez vie à votre entreprise sur internet avec un site vitrine réalisé avec un CMS moderne et performant. Chez MDM Development, nous utilisons les dernières technologies pour créer des sites web élégants, efficaces et faciles à gérer pour vous. Faites passer votre site internet au niveau supérieur avec une réalisation en javaScript. Chez MDM Development, nous utilisons les dernières technologies javascript pour créer des sites web performants, interactifs et sur mesure pour votre entreprise.</div>

        <h2 className="sousTitle"><strong>Conclusion</strong></h2>
        <div>Quelque soit la méthode que vous choississez, <strong>donnez une image moderne et professionnelle à votre entreprise </strong>en confiant la réalisation de votre site vitrine à MDM Development. Nous utilisons les meilleures méthodes pour créer des sites web élégants, performants et adaptés à vos besoins.</div>

      </div>
      {/* <div className="project-wrapper">
        <img src="https://uxfol.io/template-previews/theme-pictures/theme_02-project-thumbnail-01.png" alt="" className="project-thumbnail"/>
        <div className="project-name">
          <h2 className="project-title">SWIL Clothing Store</h2>
          <p className="project-description">How to help people find budget-friendly holiday destinations when they are not sure where to go and how</p>
        </div>
      </div>

      <div className="project-wrapper">

        <div className="project-name">
          <h2 className="project-title">PLNT Online Magazine</h2>
          <p className="project-description">PLNT is an online magazine with an accompanying mobile app helping users take care of their succulents with helpful tricks, dozens of articles and video guides.</p>
        </div>
        <img src="https://uxfol.io/template-previews/theme-pictures/theme_02-project-thumbnail-02.png" alt=" " className="project-thumbnail"/>
      </div> */}

    </div>
  </div>);
}
export default presentation;
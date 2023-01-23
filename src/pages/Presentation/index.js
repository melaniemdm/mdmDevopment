import './style.scss';
import { HashLink as Link } from 'react-router-hash-link';
function presentation(){
  return ( <div className="containerPresentation">
    <div className="portfolio-container">
      <div className="hero">
        <img src="https://res.cloudinary.com/dst61tkcz/image/upload/v1674477912/mdm-devlopment/photo-Melanie.jpg_lbtlaz.png" alt="a girl smiling" className="hero--image"/>
        <div className="hero--bio">
          <h1 className="nameDev">Developpeur Java-Jcript React - Front-End</h1>
          <h3>Bonjour ! <br></br>Je m'apelle Melanie MARIANI,</h3>
          <div className="basic-info">Je suis specialisée dans le développement de sites web Front-End en JavaScript-React. <br></br>Je suis passionnée par la création, la modification de sites vitrines et par la création de flyers, de maquettes. <br></br>
          Mes technologies fétiches sont HTML, CSS, JavaScript, React, Redux...<br></br>
          J'aime travailler sur des projets créatifs et passionnants, et je suis toujours à la recherche de nouveaux défis afin d'améliorer mes compétences.<br></br>
          </div>
          <nav>
            <Link to="/accueil#contactMe" className="contactMe">Me contacter</Link>

          </nav>
        </div>
      </div>
      <div className="descriptif">
        <h2 className="sousTitle"> Création de votre site en quelques étapes</h2>

        <ul>
          <li>_ Echanges sur vos besoins, attentes, envies,</li>
          <li>_ Choix de votre nom de domaine,</li>
          <li>_ Vérification si votre nom de domaine existe ou non puis achat de celui-ci,</li>
          <li>_ Choix de l'hebergeur en fonction de vos besoins (gratuit ou payant),</li>
          <li>_ Création de la maquette de votre futur site ou du premier prototype,</li>
          <li>_ Points réguliers sur l'avancement de votre projet,</li>
          <li>_ Une fois la structure de votre site réalisée et definitive, intégration de vos contenus,</li>
          <li>_ Mise en ligne de votre nouveau site internet.</li>
        </ul>

        <h2 className="sousTitle"> Informations supplémentaires</h2>
        <div> Vous disposerez d'un accompagnement privilégié tout au long de votre projet. </div>
        <div> Une fois le projet terminé, je reste à votre écoute pour tout compléments d'Informations.</div>
        <div> Vous n'avez aucune gestion de la structure de site à réaliser</div>
        <div> Je réponds dans les plus bref délais à vos questions. </div>
        <div> Le referencement SEO Google est bien-sûr intégré dans la réalisation de votre site. </div>
        <div> Votre site comme vous l'avez imaginé! </div>

        <h2 className="sousTitle"> Pourquoi un site vitrine?</h2>
        <div> 
          <h4>Les principaux avantages de la création d'un site vitrine sont:</h4>
          <ul>
            <li>_ Augmenter la visibilité de votre enseigne,</li>
            <li>_ Promouvoir et vous demarquer des concurrents,</li> 
            <li>_ Elargir votre clientèle et atteindre de nouveaux prospects sans aucune limite géographique</li>
          </ul>
        </div>

        <h2 className="sousTitle">Un site vitrine c'est quoi?</h2>

        <div>Un site vitrine est un site Web qui présente en ligne les produits ou les services d'une organisation, dans le but d'attirer simplement l'attention et d'éveiller l'intérêt des internautes de passage, le plus souvent sans permettre d'acheter directement le produit ou le service proposé.</div>
        <a href="https://fr.wikipedia.org/wiki/Site_vitrine#:~:text=Un%20site%20vitrine%20est%20un,produit%20ou%20le%20service%20propos%C3%A9."><div>Lien Wikipédia</div></a>

        <h2 className="sousTitle">Votre site vitrine codé de A à Z</h2>
        <div> Vous avez une idée bien précise de votre futur site vitrine et les systèmes de gestion de contenu ne répondent pas à vos attentes, passez par un site codé de A à Z en JavaScript! </div>

        <h2 className="sousTitle">Votre site vitrine réalisé avec CMS</h2>
        <div> CMS ou Système de gestion de contenu est un systeme de gestion qui permet la création de site internet ou blog. C'est une très bonne alternative dans la construction de site vitrine. Parmis les plus connus on retrouve Wordpress. Vous pouvez y choisir vos thème, vos modèles... </div>

        <h2 className="sousTitle">Conclusion</h2>
        <div>Quelque soit la méthode que vous choississez, CMS ou un site codé complètement de A à Z, je me tiens à votre disposition pour réaliser votre projet de site vitrine au plus proche de ce que vous avez imaginé.</div>

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
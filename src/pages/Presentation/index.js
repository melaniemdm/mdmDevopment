import './style.scss';
import { HashLink as Link } from 'react-router-hash-link';
function presentation(){
  return ( <div className="containerPresentation">
    <div className="portfolio-container">
      <div className="hero">
        <img src="https://images.unsplash.com/photo-1614436201459-156d322d38c6?ixlib=rb-1.2.1ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Z2lybCUyMHNtaWxpbmd8ZW58MHx8MHx8&auto=format&fit=cropw=900q=60" alt="a girl smiling" className="hero--image"/>
        <div className="hero--bio">
          <h1 className="nameDev">Mélanie MARIANI</h1>
          <h3>Developpeur java-script React - FrontEnd</h3>
          <p className="basic-info">Je suis developpeur front end en javaScript-React et je suis passionnée par la création et la modication de sites vitrines. J'ai l'avantage via la freelance de pouvoir travailler dans toute la France afin de réaliser vos projets de sites vitrines.</p>
          <nav>
            <Link to="/accueil#contactMe" className="contactMe">Me contacter</Link>

          </nav>
        </div>
      </div>
      <div className="descriptif">
        <h2 className="sousTitle"> Création de votre site en quelques étapes</h2>

        <ul>
          <li>_ Echanges sur vos besoins, attentes, envies,</li>
          <li>_ Achat de votre nom de domaine si necessaire,</li>
          <li>_ Choix de l'hebergeur en fonction de vos besoins,</li>
          <li>_ Création de la maquette de votre futur site ou du premier prototype,</li>
          <li>_ Points réguliers sur l'avancement du projet,</li>
          <li>_ Une fois la structure de votre site réalisée, intégration de vos textes et de vos photos,</li>
          <li>_ Mise en ligne de votre nouveau site internet.</li>
        </ul>
        <h2 className="sousTitle"> Informations supplémentaires</h2>
        <div> Vous disposerez d'un accompagnement privilégié tout au long de votre projet. </div>
        <div> Une fois le projet terminé, je reste à l'écoute de vos besoins.</div>
        <div> Vous n'avez aucune gestion de la structure de site à reéaliser</div>
        <div> Je réponds dans les plus bref délais à vos questions en fonction de la compléxitée posée. </div>
        <div> Le referencement SEO Google est biensur intégré dans la réalisation de votre site. </div>
        <div> Votre site comme vous l'avez imaginé! </div>
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
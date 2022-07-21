import './style.scss';

function Error(){
   
      return(
        <div className="containerError">
          <div className="codeError">ERROR 404</div>
          <div className="messageError">Oups! Une erreur s'est produite.</div>
          <div className="lienAccueil"> <a href="/accueil ">Revenir sur la page d'accueil<div className="layoutArrow"><img src={process.env.PUBLIC_URL + '/assets/arrow.png'} alt="arrow" className="arrow"/></div></a> </div>
        </div>
      );
}
export default Error;
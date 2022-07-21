import './style.scss';
import logoMe from '../../assets/logo2022.webp';
import Navigate from '../../components/Navigate';

function Header(){
    return(
        <header id="accueil">
<div className="containerLogoHeader">
    <img  alt="logo mdm development" src={logoMe} className="logoHeader" />
</div>

<Navigate/>


        </header>
    )
}
export default Header
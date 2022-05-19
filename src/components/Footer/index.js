import './style.scss';
import logoMe from '../../assets/logo2022.jpg';
function Footer(){

    return(
        <footer>
<div className="containerLogoFooter">
    <img  alt="logo mdm development" src={logoMe} className="logoFooter" />
</div>

        </footer>
    )
}
export default Footer;
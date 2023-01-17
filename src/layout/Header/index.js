import './style.scss';

import Navigate from '../../components/Navigate';

function Header() {
  return (
    <header id="accueil">

      <div className="theme-container shadow-dark">
        <img
          id="theme-icon"
          src="https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg"
          alt="ERR"
        />
      </div>


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



document.body.style='background-color: var(--bs-dark);transition: 0.5s;';
const sun = 'https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg';
const moon = 'https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg';

let theme = 'dark';
const root = document.querySelector(':root');
const container = document.getElementsByClassName('theme-container')[0];
const themeIcon = document.getElementById('theme-icon');
container.addEventListener('click', setTheme);
function setTheme() {
  switch (theme) {
    case 'dark':
      setLight();
      theme = 'light';
      break;
    case 'light':
      setDark();
      theme = 'dark';
      break;
  }
}
function setLight() {
  root.style.setProperty(
    '--bs-dark',
    'linear-gradient(318.32deg, #c3d1e4 0%, #dde7f3 55%, #d4e0ed 100%)'
  );
  container.classList.remove('shadow-dark');
  setTimeout(() => {
    container.classList.add('shadow-light');
    themeIcon.classList.remove('change');
  }, 300);
  themeIcon.classList.add('change');
  themeIcon.src = sun;
}
function setDark() {
  root.style.setProperty('--bs-dark', '#212529');
  container.classList.remove('shadow-light');
  setTimeout(() => {
    container.classList.add('shadow-dark');
    themeIcon.classList.remove('change');
  }, 300);
  themeIcon.classList.add('change');
  themeIcon.src = moon;
}
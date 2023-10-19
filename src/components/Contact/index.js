import './style.scss';

function Contact(){
  return(
    <section id="contactMe">  
    
      <div className="containerContact" >Me contacter
 
        <div className="containerForm">
          {/* <h1>Formulaire de contact</h1> */}
 
          <iframe
            src="https://tally.so/embed/npbr9y?alignLeft=1&hideTitle=1&transparentBackground=1"
  
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Nous contacter">
          </iframe>

        </div>


      </div></section>
  );
}
export default Contact;
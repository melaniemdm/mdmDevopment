import './style.scss';

function Contact(){
    return(<div className="containerContact">

<div class="container">
  <h1>Formulaire de contact</h1>
 
    <label for="fname">Nom et prénom</label>
    <input type="text" id="fname" name="firstname" placeholder="Votre nom et prénom"/>

    <label for="sujet">Sujet</label>
    <input type="text" id="sujet" name="sujet" placeholder="L'objet de votre message"/>

    <label for="emailAddress">Email</label>
    <input id="emailAddress" type="email" name="email" placeholder="Votre email"/>


    <label for="subject">Message</label>
    <textarea id="subject" name="subject" placeholder="Votre message" ></textarea>

    <input type="submit" value="Envoyer"/>

</div>


   </div>
  )
}
export default Contact;
import "./Contact.css";

function Contact() {
  return (
    <section className="content">
      <section className="infoblock">
        <div className="contact-container">
          <img src="/src/assets/contactpicture.jpg.jpg" alt="Contactpic" width="250" height="244" />
          <div className="contact-details">
            <h2>Kontakta oss</h2>
            <p className="bold-text">0771 225 225</p>
            <p className="bold-text">kontakt@nackatronik.se</p>
            <p>Vardagar: 08:30 - 19:00</p>
            <p>Helg: Stängt</p>
          </div>
        </div>
      </section>
      <section className="infoblock">
        <h2 className="emailform">Skicka E-mail </h2>
        <div>
          Name:
          <input type="text" name="name" /><br />
         
          E-mail:
          <input type="text" name="mail" /><br />
        </div>
        <div>
          <br />
          <input className="comment-input" type="text" name="comment" size="100" /><br /><br />
          <button>Skicka</button>
        </div>
      </section>
    </section>
  );
}

export default Contact;

import "./Contact.css";

function Contact() {
  return (
    <>
      <div className="contact-container">
        <div className="contact">
          <div className="contact-details">
            <h3>Get in Touch</h3>
            <p>
              I'd love to hear from you, whether you just want to shoot the
              breeze or if you're interested in my work and want to discuss a
              potential opportunity to achieve great things together!
            </p>
          </div>
          <div className="contact-inputs">
            <input type="text" name="name" placeholder="Your name" />
            <input type="text" name="email" placeholder="Your email" />
            <textarea name="" cols="30" rows="10"></textarea>
            <button>SEND</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

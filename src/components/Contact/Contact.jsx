import assets from "../../assets/assets";
import Navbar from "../Navbar/Navbar";
import "./Contact.css";

function Contact() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="contact-container">
        <div className="contact">
          <div className="contact-details">
            <h3>
              Get in <br />
              Touch
            </h3>
            <p>
              I'd love to hear from you, whether you just want to shoot the
              breeze or if you're interested in my work and want to discuss a
              potential opportNessus to achieve great things together!
            </p>
          </div>
          <div className="contact-inputs">
            <input type="text" name="name" placeholder="Your name" />
            <input type="text" name="email" placeholder="Your email" />
            <textarea
              name="message"
              cols="30"
              rows="10"
              placeholder="Add a message"
            ></textarea>
            <button>SEND</button>
          </div>
          <div className="contact-img">
            <img src={assets.contactImg} alt="contact-img" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

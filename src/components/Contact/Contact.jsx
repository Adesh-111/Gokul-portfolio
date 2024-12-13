import { useState } from "react";
import emailjs from "emailjs-com";
import assets from "../../assets/assets";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send("service_ctjkgfc", "template_90ky2lu", formData, "s1jZolVaXmIgrzufb")
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="contact">
        <div className="contact-details">
          <h3>
            Get in <br />
            Touch
          </h3>
          <p>
            I'd love to hear from you, whether you just want to shoot the breeze
            or if you're interested in my work and want to discuss a potential
            opportunity to achieve great things together!
          </p>
        </div>
        <form className="contact-inputs" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Add a message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">SEND</button>
          {status && <p className="status-message">{status}</p>}
        </form>
        <div className="contact-img">
          <img src={assets.contactImg} alt="contact-img" />
        </div>
      </div>
    </div>
  );
}

export default Contact;

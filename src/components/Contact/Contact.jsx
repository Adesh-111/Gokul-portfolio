import { useState } from "react";
import emailjs from "emailjs-com";
import assets from "../../assets/assets";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await emailjs.send(
        // .send("", "", formData, "")
        "service_ctjkgfc",
        "template_90ky2lu",
        formData,
        "s1jZolVaXmIgrzufb"
      );

      if (response.status === 200) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setFormData({ from_name: "", from_email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus({ type: "error", message: "Failed to send message. Please try again." });
    }
  };

  return (
    <div className="contact-container">
      <div className="contact">
        <div className="contact-details">
          <h3>
            Get in <br /> Touch
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
            name="from_name"
            placeholder="Your name"
            value={formData.from_name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your email"
            value={formData.from_email}
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
          {status.message && (
            <p className={`status-message ${status.type}`}>{status.message}</p>
          )}
        </form>

        <div className="contact-img">
          <img src={assets.contactImg} alt="Contact illustration" />
        </div>
      </div>
    </div>
  );
}

export default Contact;

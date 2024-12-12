import assets from "../../assets/assets";
import Certifications from "../Certifications/Certifications";
import Communities from "../Communities/Communities";
import Footer from "../Footer/Footer";
import "./Experience.css";

const experiences = [
  {
    img: assets.exImg1,
    name: "Red Teaming",
    domain: "WEB-PENTESTER",
    description:
      "As a web pentester in cybersecurity, I identify vulnerabilities in web applications to strengthen security. Using tools like Burp Suite, I conduct thorough assessments and deliver detailed reports with actionable insights to safeguard digital assets.",
    link: "/experience/cybersec",
  },
  {
    img: assets.exImg2,
    name: "Freelancing",
    domain: "CYBER SECURITY",
    description:
      "I am a cybersecurity specialist focused on web application vulnerabilities and penetration testing. I help businesses strengthen defenses and am seeking freelance opportunities to enhance web security and protect against threats.",
    link: "/experience",
  },
];

function Experience() {
  return (
    <>
      <div className="experience-container">
        <div className="experience">
          <div className="experience-title">
            <h3>RECENT EXPERIENCE</h3>
          </div>
          {experiences.map((experience, index) => (
            <a href={experience.link} key={index}>
              <div className="experience-card" key={index}>
                <div className="exp-img">
                  <img src={experience.img} alt="Exp-img" />
                </div>
                <div className="exp-desc">
                  <h2>{experience.name}</h2>
                  <h4>{experience.domain}</h4>
                  <p>{experience.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default Experience;

import assets from "../../assets/assets";
import "./About.css";

function About() {
  return (
    <>
      <div className="about-container">
        <div className="about-title">
          <h3>ABOUT ME</h3>
        </div>
        <div className="about-details"> 
          <img src={assets.GokulKrishna} alt="" className="about-img" />
          <p className="about-desc">
            Born and raised in Aruppukottai, I am currently pursuing an M.Sc. in
            Cyber Forensics and Information Security at the University of
            Madras. I hold a Bachelor's degree in B.Sc. Information Security and
            Digital Forensics in Karunya University, which laid the foundation
            for my career in cybersecurity. <br /> 
            With 6 months of experience as a Red Team Analyst at Cybersec in Gurugram, I specialize in web
            security and penetration testing. I excel in bug hunting,
            vulnerability scanning, and security documentation, leveraging my
            skills to strengthen corporate security. I am actively engaged in
            bug bounty programs to further enhance my expertise in identifying
            and mitigating security vulnerabilities. <br />
            Outside of my professional pursuits, I am passionate about slow-paced and art
            films, immersing myself in their unique storytelling and artistic
            expression.
          </p>
      </div>
      </div>
    </>
  );
}

export default About;

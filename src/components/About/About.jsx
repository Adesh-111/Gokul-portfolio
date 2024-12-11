import assets from "../../assets/assets";
import "./About.css";

function About() {
  return (
    <>
      <div className="about-container">
        <div className="about">
          <div className="about-title">
            <h3>ABOUT ME</h3>
          </div>
          <div className="about-details">
            <img src={assets.GokulKrishna} alt="" className="about-img" />
            <p className="about-desc">
              Born and raised in <span>Aruppukottai</span>, I am currently
              pursuing an M.Sc. in Cyber Forensics and Information Security at
              the University of Madras. I hold a{" "}
              <span>
                Bachelor's degree in B.Sc. Information Security and Digital
                Forensics
              </span>{" "}
              in Karunya University, which laid the foundation for my career in
              cybersecurity. <br /> <br />
              With 6 months of experience as a Red Team Analyst at{" "}
              <span>Cybersec</span> in
              <span> Gurugram</span>, I specialize in web security and
              penetration testing. I excel in <span>bug hunting</span>,
              vulnerability scanning, and security documentation, leveraging my
              skills to strengthen <span>corporate security</span>. I am
              actively engaged in <span>bug bounty</span> programs to further
              enhance my expertise in identifying and mitigating{" "}
              <span>security vulnerabilities</span>. <br /> <br />
              Outside of my professional pursuits, I am passionate about
              <span> slow-paced and art films</span>, immersing myself in their
              unique storytelling and artistic expression.
            </p>
          </div>
          <div className="skills">
            <ul className="skills-list">
              <li>
                <img src={assets.python} alt="" />
              </li>
              <li>
                <img src={assets.html} alt="" />
              </li>
              <li>
                <img src={assets.mysql} alt="" />
              </li>
              <li>
                <img src={assets.java} alt="" />
              </li>
              <li>
                <img src={assets.premierPro} alt="" />
              </li>
              <li>
                <img src={assets.photoShop} alt="" />
              </li>
              <li>
                <img src={assets.figma} alt="" />
              </li>
              <li>
                <img src={assets.unity} alt="" />
              </li>
              <li>
                <img src={assets.unreal} alt="" />
              </li>
              <li>
                <img src={assets.blender} alt="" />
              </li>
            </ul>
          </div>
          <div className="services">
            <div className="services-tab">
              <ul className="service-list">
                <li>
                  <img src={assets.s1} alt="" />
                  <p>Web Security Assessment</p>
                </li>
                <li>
                  <img src={assets.s2} alt="" />
                  <p>Vulnerability Analysis</p>
                </li>
                <li>
                  <img src={assets.s3} alt="" />
                  <p>Penetration Testing</p>
                </li>
                <li>
                  <img src={assets.s4} alt="" />
                  <p>Security Documentation</p>
                </li>
                <li>
                  <img src={assets.s5} alt="" />
                  <p>Bug Bounty Participation</p>
                </li>
              </ul>
            </div>
            <div className="service-details">
              <div className="srv-top">
                <p>
                  Skilled in cybersecurity, I combine a solid foundation in
                  vulnerability assessment and penetration testing. Here’s how
                  my cybersecurity knowledge transformed into work experience:
                </p>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
              <div className="srv-bottom">
                <ul>
                  <li>
                    <h4>Attacks</h4>
                    <p>
                      <img src={assets.listStyle} alt="" />
                      Conducted phishing and spoofing attacks to evaluate
                      clients defenses against social engineering threats.
                      Analyzed results to identify vulnerabilities in employee
                      awareness and response protocols. Provided recommendations
                      to enhance security measures.
                    </p>
                  </li>
                  <li>
                    <h4>DLP - Bypass</h4>
                    <p>
                      <img src={assets.listStyle} alt="" />
                      Bypassed DLP systems to gather sensitive information,
                      simulating insider threats to reveal data security risks.
                      Compiled a report detailing vulnerabilities and their
                      operational implications. Provided strategic
                      recommendations to enhance DLP effectiveness.
                    </p>
                  </li>
                  <li>
                    <h4>Web Penetration Testing</h4>
                    <p>
                      <img src={assets.listStyle} alt="" />
                      Performed comprehensive web penetration testing to uncover
                      critical vulnerabilities, including SQL injection and XSS.
                      Delivered detailed documentation of findings and provided
                      tailored recommendations for remediation.
                    </p>
                  </li>
                  <li className="four-srv">
                    <h4>Report Documenting</h4>
                    <p>
                      <img src={assets.listStyle} alt="" />
                      Documenting the vulnerability and its potential impact,
                      followed by context and recommended mitigation measures
                      like software updates or configuration changes. This
                      approach ensures both technical teams and clients
                      understand the risks and necessary actions to enhance
                      security.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="resume-section">
            <p>
              I’m eager to embark on an exciting journey of innovation in
              cybersecurity. Whether you’re a recruiter or a fellow
              cybersecurity professional, I invite you to connect with me.
              Together, we can explore opportunities and share insights to shape
              a safer digital future!
            </p>
            <a href="">
              <button>
                <i className="fa-solid fa-download"></i>
                MY RESUME
              </button>
            </a>
          </div>
          <div className="conquer" >
            <img src={assets.Arnold} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

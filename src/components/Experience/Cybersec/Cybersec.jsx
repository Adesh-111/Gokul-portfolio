import assets from "../../../assets/assets";
import "./Cybersec.css";

function Cybersec() {
  return (
    <>
      <div className="cybersec-container">
        <div className="cybersec">
          <div className="cybersec-card">
            <a href="/experience">
              <button>
                <i className="fa-solid fa-arrow-left"></i>
              </button>
            </a>
            <img src={assets.exImg1} alt="" className="cybersec-img" />
            <img src={assets.cybersecIcon} alt="" className="cybersec-icon" />
            <p>
              In my role as a Red Team Analyst at Cybersec.enterprises, I was
              responsible for evaluating and enhancing client security measures
              through various targeted assessments and tests. This position
              required a blend of technical expertise and collaborative skills
              to identify vulnerabilities and implement effective remediation
              strategies.
            </p>
          </div>
          <div className="key-responsibilities">
            <p>Key Responsibilities:</p>
            <ul>
              <li>
                Conducted phishing and spoofing attacks to assess client
                defenses, simulating real-world attack scenarios. This proactive
                approach allowed us to measure the resilience of existing
                security protocols and improve client awareness regarding social
                engineering threats.
              </li>
              <li>
                Successfully bypassed Data Loss Prevention (DLP) systems to
                gather sensitive information, highlighting areas of
                vulnerability and demonstrating the critical need for stronger
                data protection measures. This exercise underscored the
                importance of robust security infrastructures in safeguarding
                sensitive data against potential threats.
              </li>
              <li>
                Performed comprehensive web penetration testing on the client's
                environment, utilizing a variety of tools and methodologies to
                identify and exploit vulnerabilities. This hands-on experience
                allowed me to thoroughly analyze web applications and networks,
                contributing to the overall security assessment of client
                systems.
              </li>
              <li>
                Collaborated with cross-functional teams to document findings
                and develop effective remediation strategies. By working closely
                with other cybersecurity professionals, I ensured that our
                recommendations were actionable and tailored to each client’s
                unique environment, ultimately enhancing their security posture.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cybersec;

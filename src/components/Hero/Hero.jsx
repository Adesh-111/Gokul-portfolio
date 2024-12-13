import "./Hero.css";
import assets from "../../assets/assets";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  offset: 200, 
  duration: 1000, 
  easing: 'ease-in-out', 
  delay: 300, 
});

function Hero() {
  return (
    <>
      <div className="hero-container" data-aos="fade-left">
        <div className="hero">
          <div className="hero-title">
            <h1>GOKUL KRISHNA</h1>
          </div>
          <div className="hero-details">
            {window.innerWidth > 768 ? (
              <h4>
                S<br />
                C<br />
                R<br />
                O<br />
                L<br />L<i className="fa-solid fa-arrow-down"></i>
              </h4>
            ) : null}

            <div className="hero-image">
              <img src={assets.profilePic} alt="" className="profile" />
              <div className="hero-about">
                <h3>
                  ABOUT <br />
                  MYSELF
                </h3>
                <p>
                  I am <b>Gokul Krishna</b>, a <b>cybersecurity specialist</b>,
                  adept at developing innovative solutions for intricate
                  security challenges. I am passionate about leveraging{" "}
                  <b>technology</b> and <b>analytical skills</b> to push
                  boundaries, delivering results that merge technical accuracy
                  with strategic insight for enhanced <b>digital security</b>{" "}
                  and <b>seamless user experiences</b>.
                </p>
              </div>
              <div className="skills hero-skills">
                <ul className="skills-list">
                  <li>
                    <img src={assets.python} alt="" />
                  </li>
                  <li>
                    <img src={assets.splush} alt="" />
                  </li>
                  <li>
                    <img src={assets.metasploit} alt="" />
                  </li>
                  <li>
                    <img src={assets.Tor} alt="" />
                  </li>
                  <li>
                    <img src={assets.wireshark} alt="" />
                  </li>
                  <li>
                    <img src={assets.linux} alt="" />
                  </li>
                  <li>
                    <img src={assets.Nessus} alt="" />
                  </li>
                  <li>
                    <img src={assets.burpSuite} alt="" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="hero-services">
              <img src={assets.pen} alt="" />
              <img src={assets.webSec} alt="" />
              <img src={assets.cybersecHero} alt="" className="cyber-hero" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;

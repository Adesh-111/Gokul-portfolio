import "./Hero.css";
import assets from "../../assets/assets";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  offset: 100, 
  duration: 1000,
  easing: "ease-in-out", 
  once: true, 
  mirror: false,
});
AOS.refresh(); 


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
                    <img src="https://i0.wp.com/tinkercademy.com/wp-content/uploads/2018/04/python-icon.png?ssl=1" alt="" />
                  </li>
                  <li>
                    <img src={assets.splunk} alt="" />
                  </li>
                  <li>
                    <img src="https://dashboard.snapcraft.io/site_media/appmedia/2022/08/metasploit-framework-logo.svg.png" alt="" />
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

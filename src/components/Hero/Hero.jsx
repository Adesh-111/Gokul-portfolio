import "./Hero.css";
import assets from "../../assets/assets";

function Hero() {
  return (
    <>
      <div className="hero-container">
        <div className="hero">
          <div className="hero-title">
            <h1>GOKUL KRISHNA</h1>
          </div>
          <div className="hero-details">
            <h4>SCROLL
            <i className="fa-solid fa-arrow-down"></i>
            </h4>
            <div className="hero-image">
              <img src={assets.profilePic} alt="" />
              <div className="hero-about">
                <h3>ABOUT MYSELF</h3>
                <p>
                  I am <b>Gokul Krishna</b>, a <b>cybersecurity specialist</b>,
                  adept at developing innovative solutions for intricate
                  security challenges. I am passionate about leveraging{" "}
                  <b>technology</b> and <b>analytical skills</b> to push
                  boundaries, delivering results that merge technical accuracy
                  with strategic insight for enhanced <b>digital security</b>{" "}
                  and <b>seamless user experiences</b>.
                </p>
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
              </div>
            </div>
            <div className="hero-services">
              <img src={assets.pen} alt="" />
              <img src={assets.webSec} alt="" />
              <img src={assets.cybersecHero} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;

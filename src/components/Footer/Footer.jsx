import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer">
          <div className="footer-details">
            <h3>
              GOKUL <br />
              KRISHNA
            </h3>
            <p className="footer-about">
              A cybersecurity expert from India, committed to identifying web
              vulnerabilities and enhancing digital security. Driven by a
              passion for innovative solutions that protect critical systems and
              ensure data integrity.
            </p>
            <p className="copyright">J N Gokul Krishna - Copyright © 2024</p>
          </div>
          <div className="footer-navigation">
            <h4>Sitemap</h4>
            <ul className="foo-links">
              <a href="/" className="foo-link">
                <li>Home</li>
              </a>
              <a href="/experience" className="foo-link">
                <li>Experience</li>
              </a>
              <a href="/about" className="foo-link">
                <li>About</li>
              </a>
            </ul>
          </div>
          <div className="footer-links">
            <h3>FOLLOW ME ON</h3>
            <ul className="foo-social">
              <a href="http://www.linkedin.com/in/gokul2x">
                <li>
                  <i className="fa-brands fa-linkedin"></i>
                </li>
              </a>
              <a href="https://www.instagram.com/gokul2x">
                <li>
                  <i className="fa-brands fa-instagram"></i>
                </li>
              </a>
              <a href="https://x.com/gokul2x">
                <li>
                  <i className="fa-brands fa-x-twitter"></i>
                </li>
              </a>
              <a href="https://github.com/gokul2x">
                <li>
                  <i className="fa-brands fa-github"></i>
                </li>
              </a>
              <a href="https://www.upwork.com/freelancers/~013a19bb1ec5d14324?mp_source=share">
                <li>
                  <i className="fa-brands fa-upwork"></i>
                </li>
              </a>
            </ul>
            <a href="/contact">
              <button>Contact me</button>
            </a>
          </div>
        </div>
        <p className="developer-signature">
          Made with ❤️ by <a href="https://linktr.ee/adesh_d">Adesh D</a>
        </p>
      </div>
    </>
  );
}

export default Footer;

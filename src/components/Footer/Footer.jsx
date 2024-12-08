import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer">
          <div className="footer-details">
            <h3></h3>
            <p className="footer-about"></p>
            <p className="copyright"></p>
          </div>
          <div className="footer-navigation">
            <h4></h4>
            <ul className="foo-links">
              <a href="" className="foo-link">
                <li></li>
              </a>
              <a href="" className="foo-link">
                <li></li>
              </a>
              <a href="" className="foo-link">
                <li></li>
              </a>
            </ul>
          </div>
          <div className="footer-links">
            <h3></h3>
            <ul className="foo-social">
              <a href="">
                <li>
                  <img src="" alt="" />
                </li>
              </a>
              <a href="">
                <li>
                  <img src="" alt="" />
                </li>
              </a>
              <a href="">
                <li>
                  <img src="" alt="" />
                </li>
              </a>
              <a href="">
                <li>
                  <img src="" alt="" />
                </li>
              </a>
              <a href="">
                <li>
                  <img src="" alt="" />
                </li>
              </a>
            </ul>
          </div>
        </div>
        <p>
          Made with ❤️ by <a href="">Adesh D</a>
        </p>
      </div>
    </>
  );
}

export default Footer;

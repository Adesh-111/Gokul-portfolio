import assets from "../../assets/assets";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar">
          <a href="/" className="nav-img">
            <img src={assets.Logo} alt="" />
          </a>
          <ul className="nav-links">
            <a href="/about" className="nav-link">
              <li>ABOUT</li>
            </a>
            <a href="/experience" className="nav-link">
              <li>EXPERIENCE</li>
            </a>
            <a href="/contact" className="nav-link contact-link">
              <li>CONTACT</li>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;

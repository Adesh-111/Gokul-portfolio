import assets from "../../assets/assets";
import "./Navbar.css"

function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar">
          <div className="nav-img">
            <img src={assets.Logo} alt="" />
          </div>
          <ul className="nav-links">
            <a href="" className="nav-link">
              <li>EXPERIENCE</li>
            </a>
            <a href="" className="nav-link">
              <li>ABOUT</li>
            </a>
            <a href="" className="nav-link contact-link">
              <li>CONTACT</li>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;

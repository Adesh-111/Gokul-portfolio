import assets from "../../../assets/assets";
import "./Cybersec.css";

function Cybersec() {
  return (
    <>
      <div className="cybersec-container">
        <div className="cybersec">
            <button><i className="fa-solid fa-arrow-left"></i></button>
            <div className="cybersec-card">
                <img src={assets.exImg1} alt="" />
            </div>
        </div>
      </div>
    </>
  );
}

export default Cybersec;

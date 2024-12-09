//
import "./index.css";
import cloudImg from "../../assets/images/cloud.svg";
import locationIcon from "../../assets/icons/locationIcon.svg";

const Main = () => {
  return (
    <div className="main">
      <div className="main-folder">
        <div className="temp">
          <img src={cloudImg} alt="" />
          <div className="location-wrap">
            <img className="" src={locationIcon} alt="" />
            <p className="location-text">Rio do Sul, SC</p>
          </div>
          <div>
            <p className="temp-text">
              18 <span>°C</span>
            </p>
            <p className="temp-sec-text">
              22° <span>16°</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

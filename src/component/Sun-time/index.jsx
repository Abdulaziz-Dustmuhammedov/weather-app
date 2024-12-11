//
import "./index.css";
import sun from "../../assets/icons/sun.svg";
import sunTimeImg from "../../assets/images/sunTimeImg.svg";

const SunTime = () => {
  return (
    <div className="suntime">
      <div className="suntime-wrap flex flex-col items-center gap-2">
        <img src={sun} alt="" />
        <p className="sun-time-text">Sun time</p>
        <div className="suntime-folder">
          <img src={sunTimeImg} alt="" width={230} height={130} />
        </div>
      </div>
    </div>
  );
};

export default SunTime;

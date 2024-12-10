//
import "./index.css";
import cloud from "../../assets/icons/cloud.svg";
import bigSun from "../../assets/icons/big-sun.svg";
import bigRainImg from "../../assets/icons/bigRainImg.svg";
import lightning from "../../assets/icons/lightning.svg";
import cloudySun from "../../assets/icons/cloudy-sun.svg";

const WeekWeather = () => {
  return (
    <div className="week-folder flex items-center justify-around gap-6">
      <div className="week-wrapper">
        <p className="week-name-text text-sm mb-4">Tomorrow</p>
        <img className="mb-6" src={cloud} alt="cloud" />
        <p className="week-text text-base">
          21° <span>16°</span>
        </p>
      </div>

      <div className="week-wrapper">
        <p className="week-name-text text-sm mb-4">Friday</p>
        <img className="mb-6" src={bigSun} alt="big sun" />
        <p className="week-text text-base">
          28° <span>20°</span>
        </p>
      </div>

      <div className="week-wrapper">
        <p className="week-name-text text-sm mb-4">Saturday</p>
        <img className="mb-6" src={bigRainImg} alt="rain img" />
        <p className="week-text text-base">
          25° <span>21°</span>
        </p>
      </div>

      <div className="week-wrapper">
        <p className="week-name-text text-sm mb-4">Sunday</p>
        <img className="mb-6" src={lightning} alt="lightning" />
        <p className="week-text text-base">
          20° <span>14°</span>
        </p>
      </div>

      <div className="week-wrapper">
        <p className="week-name-text text-sm mb-4">Monday</p>
        <img className="mb-6" src={cloudySun} alt="cloudySun" />
        <p className="week-text text-base">
          24° <span>18°</span>
        </p>
      </div>
    </div>
  );
};

export default WeekWeather;

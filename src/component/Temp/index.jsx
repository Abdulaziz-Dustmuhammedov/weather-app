//
import "./index.css";
import cloudImg from "../../assets/images/cloud.svg";
import locationIcon from "../../assets/icons/locationIcon.svg";
import wind from "../../assets/icons/wind.svg";
import humidity from "../../assets/icons/humidity.svg";
import rain from "../../assets/icons/rain.svg";

const Temp = () => {
  return (
    <div className="temp">
      <img className="temp-cloud-img" src={cloudImg} alt="" />
      <div className="location-wrap cursor-pointer  ">
        <img className="" src={locationIcon} alt="" />
        <p className="location-text">Rio do Sul, SC</p>
      </div>
      <div className="temp-text-folder">
        <p className="temp-text">
          18 <span>°C</span>
        </p>
        <p className="temp-sec-text">
          22° <span>16°</span>
        </p>
      </div>

      <div className="wrapper">
        <div className="wind-wrap flex items-center gap-3">
          <img
            className="opacity-50 ml-2"
            src={wind}
            alt=""
            width={27}
            height={24}
          />
          <div className="weather-wrap flex flex-col items-start ">
            <p className="wind-text">wind</p>
            <p className="wind-text">17 km/h</p>
          </div>
        </div>

        <div className="humidity-wrap flex items-center gap-3">
          <img className="ml-2" src={humidity} alt="" width={27} height={24} />
          <div className="weather-wrap flex flex-col items-start ">
            <p className="wind-text">humidity</p>
            <p className="wind-text">31 %</p>
          </div>
        </div>

        <div className="rain-wrap flex items-center gap-3">
          <img className="ml-2" src={rain} alt="" width={27} height={24} />
          <div className="weather-wrap flex flex-col items-start ">
            <p className="wind-text">rain</p>
            <p className="wind-text">10 %</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Temp;

import AirQuality from "../Air-Quality";
import SunTime from "../Sun-time";
import Temp from "../Temp";
import WeekWeather from "../Week-weather";
import "./index.css";

export default function SubMain() {
  return (
    <div className="main">
      <div className="main-folder gap-11">
        <Temp />
        <div className="gap-9">
          <div className="main-wrapper gap-9 ">
            <AirQuality />
            <SunTime />
          </div>
          <WeekWeather />
        </div>
      </div>
    </div>
  );
}

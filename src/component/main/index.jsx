//

import AirQuality from "../Air-Quality";
import SunTime from "../Sun-time";
import Temp from "../Temp";
import WeekWeather from "../Week-weather";
import "./index.css";
const Main = () => {
  return (
    <div className="main">
      <div className="flex items-center gap-11">
        <Temp />
        <div className="gap-9">
          <div className="flex items-center gap-9">
            <AirQuality />
            <SunTime />
          </div>
          <WeekWeather />
        </div>
      </div>
    </div>
  );
};

export default Main;

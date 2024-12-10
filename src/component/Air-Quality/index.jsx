//
import "./index.css";

import leaf from "../../assets/icons/leaf.svg";

const AirQuality = () => {
  return (
    <div className="air">
      <div className="air-folder">
        <div className="air-wrap flex  gap-3 mt-6 mb-7">
          <img src={leaf} alt="" />
          <p className="air-text">Air quality</p>
        </div>
        <div className="good-wrap text-center mb-6">
          <p className="status text-base">Good</p>
          <p className="good-number text-5xl">21</p>
        </div>

        <ul className="flex items-center gap-3">
          <li className="air-item">
            <p className="text-base">12.9</p>
            <span className="text-sm">PM2.5</span>
          </li>
          <li className="air-item">
            <p className="text-base">12.9</p>
            <span className="text-sm">PM10</span>
          </li>
          <li className="air-item">
            <p className="text-base">2.1</p>
            <span className="text-sm">sO₂</span>
          </li>
          <li className="air-item">
            <p className="text-base">1.4</p>
            <span className="text-sm">NO₂</span>
          </li>
          <li className="air-item">
            <p className="text-base">21.2</p>
            <span className="text-sm">O₃</span>
          </li>
          <li className="air-item">
            <p className="text-base">0.7</p>
            <span className="text-sm">CO</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AirQuality;

//
import "./index.css";
import locationIcon from "../../assets/icons/locationIcon.svg";
import wind from "../../assets/icons/wind.svg";
import humidity from "../../assets/icons/humidity.svg";
import rain from "../../assets/icons/rain.svg";
import search from "../../assets/icons/search.svg";

import cloudImg from "../../assets/images/cloud.svg";
import sunImg from "../../assets/images/sun.png";
import cloudyDay from "../../assets/images/partly-cloudy-day.png";
import cloudy from "../../assets/images/cloudy.png";
import shover from "../../assets/images/showers.png";
import heavyShowers from "../../assets/images/heavy-showers.png";
import thunderstormShowers from "../../assets/images/thunderstorm-showers.png";
import snow from "../../assets/images/snow.png";
import mist from "../../assets/images/mist.png";

import overcast from "../../assets/images/overcast.png";

import { useEffect, useState } from "react";
import { useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Temp = () => {
  const api_key = "8d586b2b216b1effa59a2a863909faf3";
  const searchInput = useRef();

  const [weather, setWeather] = useState({});

  // const [loader, setLoader] = useState(false);

  const searchCity = () => {
    let city = searchInput.current.value.trim();
    if (!city) {
      toast.error("Shahar nomini kiriting!");
      toast.error("Enter the city name");
      return;
    }

    // setLoader(true);
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;

    axios
      .get(url)
      .then((response) => {
        setWeather(response.data);
        toast.success("Success");
        // setLoader(false);
      })
      .catch((error) => {
        toast.error("Error");
        // setLoader(false);
      });
    //loader

    // .finally(() => {
    //   setLoader(false);
    // });

    //loader
  };

  useEffect(() => {
    let city = "Tashkent";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;

    // setLoader(true);
    axios
      .get(url)
      .then((response) => {
        setWeather(response.data);
      })
      .catch((error) => {
        toast.error("Error");
      });
    // loader

    // .finally(() => {
    //   setLoader(false);
    // });

    // loader
  }, []);

  console.log(weather);

  return (
    <div className="temp">
      {/* loader  */}
      {/* {loader && <h1>Loading</h1>} */}
      {/* loader  */}

      <div className="location-wrap cursor-pointer  ">
        <img className="" src={locationIcon} alt="" />
        <p className="location-text">Rio do Sul, SC</p>
      </div>
      <div className="input-wrap">
        <input
          defaultValue={"Tashkent"}
          type="search"
          className="search-input"
          placeholder="Search"
          ref={searchInput}
        />
        <button onClick={searchCity} className="search-btn">
          <img
            className="search-img"
            src={search}
            alt="search img "
            width={30}
            height={30}
          />
        </button>
      </div>
      <img
        className="temp-cloud-img"
        src={
          weather?.weather
            ? weather?.weather[0].icon === "01d" ||
              weather?.weather[0].icon === "01n"
              ? sunImg
              : weather?.weather[0].icon === "02d" ||
                weather?.weather[0].icon === "02n"
              ? cloudyDay
              : weather?.weather[0].icon === "03d" ||
                weather?.weather[0].icon === "03n"
              ? cloudy
              : weather?.weather[0].icon === "04d" ||
                weather?.weather[0].icon === "04n"
              ? cloudImg
              : weather?.weather[0].icon === "09d" ||
                weather?.weather[0].icon === "09n"
              ? shover
              : weather?.weather[0].icon === "10d" ||
                weather?.weather[0].icon === "10n"
              ? heavyShowers
              : weather?.weather[0].icon === "11d" ||
                weather?.weather[0].icon === "11n"
              ? thunderstormShowers
              : weather?.weather[0].icon === "13d" ||
                weather?.weather[0].icon === "13n"
              ? snow
              : mist
            : overcast
        }
        alt="clear"
        width={100}
        height={100}
      />
      <div className="temp-text-folder">
        {/* <img src={cloudImg} alt="" /> */}
        <p className="temp-text">
          {weather?.main?.temp ? Math.round(weather?.main?.temp) : 0}
          <span>°C</span>
        </p>
        {/* <p className="temp-sec-text">
          {weather?.main?.temp_max ? weather?.main?.temp_max : 0} /
          <span>{weather?.main?.temp_min ? weather?.main?.temp_min : 0}</span>
        </p> */}
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
            <p className="wind-text">
              {weather?.wind?.speed ? Math.round(weather?.wind?.speed) : 0} km/h
            </p>
          </div>
        </div>

        <div className="humidity-wrap flex items-center gap-3">
          <img className="ml-2" src={humidity} alt="" width={27} height={24} />
          <div className="weather-wrap flex flex-col items-start ">
            <p className="wind-text">humidity</p>
            <p className="wind-text">
              {weather?.main?.humidity ? weather?.main?.humidity : 0} %
            </p>
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

// const Temp = () => {
//   const searchCity = () => {
//     alert(inputVal);
//   };

//   const [inputVal, setInputVal] = useState("");

//   const handleChange = (e) => {
//     setInputVal(e.target.value);
//     console.log(e.target.value);
//   };

//   return (
//     <div className="temp">
//       <img className="temp-cloud-img" src={cloudImg} alt="" />
//       <div className="location-wrap cursor-pointer  ">
//         <img className="" src={locationIcon} alt="" />
//         <p className="location-text">Rio do Sul, SC</p>
//       </div>
//       <div className="input-wrap">
//         <input
//           type="search"
//           className="search-input"
//           placeholder="search"
//           onChange={handleChange}
//           value={inputVal}
//         />
//         <button onClick={searchCity} className="search-btn">
//           <img
//             className="search-img"
//             src={search}
//             alt="search img "
//             width={30}
//             height={30}
//           />
//         </button>
//       </div>
//       <div className="temp-text-folder">
//         <p className="temp-text">
//           18 <span>°C</span>
//         </p>
//         <p className="temp-sec-text">
//           22° <span>16°</span>
//         </p>
//       </div>

//       <div className="wrapper">
//         <div className="wind-wrap flex items-center gap-3">
//           <img
//             className="opacity-50 ml-2"
//             src={wind}
//             alt=""
//             width={27}
//             height={24}
//           />
//           <div className="weather-wrap flex flex-col items-start ">
//             <p className="wind-text">wind</p>
//             <p className="wind-text">17 km/h</p>
//           </div>
//         </div>

//         <div className="humidity-wrap flex items-center gap-3">
//           <img className="ml-2" src={humidity} alt="" width={27} height={24} />
//           <div className="weather-wrap flex flex-col items-start ">
//             <p className="wind-text">humidity</p>
//             <p className="wind-text">31 %</p>
//           </div>
//         </div>

//         <div className="rain-wrap flex items-center gap-3">
//           <img className="ml-2" src={rain} alt="" width={27} height={24} />
//           <div className="weather-wrap flex flex-col items-start ">
//             <p className="wind-text">rain</p>
//             <p className="wind-text">10 %</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Temp;

// state = {
//   inputVal: ""
// };
// handleChange = (e) => {
//   this.setState(state{
//     inputVal:e.target.value
//   })
// };

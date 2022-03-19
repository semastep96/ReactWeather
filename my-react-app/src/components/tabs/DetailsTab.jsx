import React from "react";
import timeConvert from "../../js/time_convert";

function DetailsTab({ cityInfo }) {
  const sunrise = timeConvert(cityInfo.sys.sunrise)
  const sunset = timeConvert(cityInfo.sys.sunset)
  return(
    <div className="tabs__content details active">
      <div className="location">{cityInfo.name}</div>
      <div className="details__item details__temperature">Temperature: <span>{cityInfo.main.temp}</span>°</div>
      <div className="details__item details__feels">Feels like: <span>{cityInfo.main.feels_like}</span>°</div>
      <div className="details__item details__weather">Weather: <span>{cityInfo.weather[0].main}</span></div>
      <div className="details__item details__sunrise">Sunrise: <span>{`${sunrise.hours}:${sunrise.minutes}`}</span></div>
      <div className="details__item details__sunset">Sunset: <span>{`${sunset.hours}:${sunset.minutes}`}</span></div>
    </div>
  );
}

export default DetailsTab
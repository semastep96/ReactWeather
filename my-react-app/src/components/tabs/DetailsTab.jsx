import React from "react";
import timeConvert from "../../js/time_convert";

function DetailsTab({ cityInfo }) {
  const sunrise = timeConvert(cityInfo.sys.sunrise ? cityInfo.sys.sunrise : 0)
  const sunset = timeConvert(cityInfo.sys.sunset ? cityInfo.sys.sunset : 0)
  return(
    <div className="tabs__content details active">
      <div className="location">{cityInfo.name ? cityInfo.name : 'Unknown town'}</div>
      <div className="details__item details__temperature">Temperature: <span>{cityInfo.main.temp ? cityInfo.main.temp : 0}</span>°</div>
      <div className="details__item details__feels">Feels like: <span>{cityInfo.main.feels_like ? cityInfo.main.feels_like : 0}</span>°</div>
      <div className="details__item details__weather">Weather: <span>{cityInfo.weather[0].main ? cityInfo.weather[0].main : 'Unknown'}</span></div>
      <div className="details__item details__sunrise">Sunrise: <span>{sunrise.hours ? `${sunrise.hours}:${sunrise.minutes}` : '00:00'}</span></div>
      <div className="details__item details__sunset">Sunset: <span>{sunset.hours ? `${sunset.hours}:${sunset.minutes}` : '00:00'}</span></div>
    </div>
  );
}

export default DetailsTab
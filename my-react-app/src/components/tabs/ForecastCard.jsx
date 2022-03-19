import React from "react";
import timeConvert from "../../js/time_convert";
import weatherImages from "../../js/weatherImages";

function ForecastCard({ info }) {
  const {hours, minutes, day, month} = timeConvert(info.dt)

  return (
    <div className="forecast__card card">
      <div className="card__top">
        <div className="card__date">{day} {month}</div>
        <div className="card__time">{hours}:{minutes}</div>
      </div>
      <div className="card__bottom">
        <div className="card__temperature">
          <div className="card__real">Temperature: <span>{info.main.temp}</span>°</div>
          <div className="card__feels">Feels like: <span>{info.main.feels_like}</span>°</div>
        </div>
        <div className="card__weather">{info.weather[0].main}<img src={weatherImages[info.weather[0].icon]} alt={info.weather[0].main} className="card__img"/></div>
      </div>
    </div>
  );
}

export default ForecastCard
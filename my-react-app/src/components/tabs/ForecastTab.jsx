import React from "react";
import ForecastCard from "./ForecastCard";

function ForecastTab({ forecast }) {
  let cards = null
  if (forecast.list) {
    cards = forecast.list.map(card => <ForecastCard key={card.dt} info={card}/>)
  }

  return(
    <div className="tabs__content forecast active">
      <div className="location">{forecast.city ? forecast.city.name : 'Unknown'}</div>
      <div className="forecast__cards">
      {cards ? cards : '---'}
      </div>
    </div>
  );
}

export default ForecastTab
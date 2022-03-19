import React from "react";
import ForecastCard from "./ForecastCard";

function ForecastTab({ forecast }) {
  const cards = forecast.list.map(card => <ForecastCard key={card.dt} info={card}/>)

  return(
    <div className="tabs__content forecast active">
      <div className="location">Aktobe</div>
      <div className="forecast__cards">
      {cards}
      </div>
    </div>
  );
}

export default ForecastTab
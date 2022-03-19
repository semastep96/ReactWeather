import React from 'react'
import { favorites } from '../../js/favorites';
import weatherImages from '../../js/weatherImages';
import { FavoritesContext } from '../MainBoard';

function TabNow({cityInfo}) {

  return(
    <div className="tabs__content now active">
      <div className="now__celsius"><span>{Math.round(cityInfo.main.temp)}</span>°</div>
      <img src={weatherImages[cityInfo.weather[0].icon]} className="now__img"/>
      <div className="now__bottom">
        <div className="now__location">{cityInfo.name}</div>
        <FavoritesContext.Consumer>
          {context => {
            return <button className={favorites.cities.has(cityInfo.name) ? "now__like active" : "now__like"} onClick={() => {
              if (favorites.cities.has(cityInfo.name)) {
                favorites.delete(cityInfo.name)
              } else {
                favorites.add(cityInfo.name)
              }
              context.setFavoritesCities([...favorites.cities])
            }}></button>
          }}
        </FavoritesContext.Consumer>
      </div>
    </div>
  );
}

export default TabNow

import React from 'react'
import { favorites } from '../../js/favorites';
import weatherImages from '../../js/weatherImages';
import { FavoritesContext } from '../MainBoard';

function TabNow({cityInfo}) {
  const like ={
    activeClass: "now__like active",
    inactiveClass: "now__like"
  }
  return(
    <div className="tabs__content now active">
      <div className="now__celsius"><span>{cityInfo.main ? Math.round(cityInfo.main.temp) : 0}</span>°</div>
      <img src={cityInfo.weather ? weatherImages[cityInfo.weather[0].icon] : weatherImages['01d']} 
      className="now__img"/>
      <div className="now__bottom">
        <div className="now__location">{cityInfo.name ? cityInfo.name : 'Unknown city'}</div>
        <FavoritesContext.Consumer>
          {context => {
            return <button className={favorites.cities.has(cityInfo.name) ? like.activeClass : like.inactiveClass}
            onClick={() => {
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

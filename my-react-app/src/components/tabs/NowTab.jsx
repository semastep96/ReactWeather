import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import weatherImages from '../../js/weatherImages';
import { addFavoriteCity, deleteFavoriteCity } from '../../store/actions';

function TabNow({cityInfo}) {
  const like ={
    activeClass: "now__like active",
    inactiveClass: "now__like"
  }

  const store = useSelector(store => store)
  const dispatch = useDispatch()

  return(
    <div className="tabs__content now active">
      <div className="now__celsius"><span>{cityInfo.main ? Math.round(cityInfo.main.temp) : 0}</span>°</div>
      <img src={cityInfo.weather ? weatherImages[cityInfo.weather[0].icon] : weatherImages['01d']} 
      className="now__img"/>
      <div className="now__bottom">
        <div className="now__location">{cityInfo.name ? cityInfo.name : 'Unknown city'}</div>
        {<button className={store.favoriteCities.includes(cityInfo.name) ? like.activeClass : like.inactiveClass}
          onClick={() => {
            if (store.favoriteCities.includes(cityInfo.name)) {
              dispatch(deleteFavoriteCity(cityInfo.name))
            } else {
              dispatch(addFavoriteCity(cityInfo.name))
            }
          }} />}
      </div>
    </div>
  );
}

export default TabNow

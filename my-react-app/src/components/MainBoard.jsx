import React, { useEffect, useState } from 'react'
import Tabs from './tabs/Tabs';
import FavoriteLocations from './favoriteLocations/FavoriteLocations';
import api from '../js/api';
import { currentCityApi } from '../js/currentCity';
import { favorites } from '../js/favorites';
import store from '../store/store';
import { addFavoriteCity, deleteFavoriteCity, updateCurrentCity } from '../store/actions';

console.log(store.getState());
store.dispatch(updateCurrentCity('New York'))
console.log(store.getState());
store.dispatch(addFavoriteCity('Karaganda'))
console.log(store.getState());
store.dispatch(deleteFavoriteCity('Karaganda'))
console.log(store.getState());

export const FavoritesContext = React.createContext()

function MainBoard({ currentCity }) {
  const [favoriteCities, setFavoritesCities] = useState([...favorites.cities])

  const [cityInfo, setInfo] = useState({})

  const [forecast, setForecast] = useState({})

  useEffect(async () => {
    const info = await api.getCityInfo(currentCity)
    if (info) {
      setInfo(info)
      currentCityApi.save(currentCity)
      return
    }
    alert('error bad request from server')
  }, [currentCity])

  useEffect(async () => {
    const forecast = await api.getForecast(currentCity)
    if (forecast) {
      setForecast(forecast)
      return
    }
  }, [currentCity])

  return (
    <div className='main'>
      <FavoritesContext.Provider value={{favoriteCities, setFavoritesCities}}>
        <Tabs cityInfo={cityInfo} forecast={forecast} />
        <FavoriteLocations />
      </FavoritesContext.Provider>
    </div>
  );
 
}

export default MainBoard
import React, { useEffect, useState } from 'react'
import Tabs from './tabs/Tabs';
import FavoriteLocations from './favoriteLocations/FavoriteLocations';
import api from '../js/api';
import { currentCityApi } from '../js/currentCity';
import { favorites } from '../js/favorites';

export const FavoritesContext = React.createContext()

function MainBoard({ currentCity }) {
  const [favoriteCities, setFavoritesCities] = useState([...favorites.cities])

  const [cityInfo, setInfo] = useState({
    name: 'UnknownCity',
    main: {temp: 0, feels_like: 0},
    weather: [{icon: "01d", main: "Clear"}],
    sys: {sunrise: 0, sunset: 0}
  })

  const [forecast, setForecast] = useState({
    list: [{
      dt: '1647723600',
      main: {temp: 0, feels_like: 0},
      weather:[{main: 'Clear', icon:'01n'}]
    }]
  })
  const Forecast = React.createContext(forecast)

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
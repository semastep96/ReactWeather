import React, { useEffect, useState } from 'react'
import Tabs from './tabs/Tabs';
import FavoriteLocations from './favoriteLocations/FavoriteLocations';
import api from '../js/api';
import { currentCityApi } from '../js/currentCity';
import { useSelector } from 'react-redux';



function MainBoard({ currentCity }) {
  const state = useSelector(state => state)

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
        <Tabs cityInfo={cityInfo} forecast={forecast} />
        <FavoriteLocations />
    </div>
  );
 
}

export default MainBoard
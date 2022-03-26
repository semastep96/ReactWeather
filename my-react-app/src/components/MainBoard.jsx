import React, { useEffect } from 'react'
import Tabs from './tabs/Tabs';
import FavoriteLocations from './favoriteLocations/FavoriteLocations';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCityInfo, fetchForecast } from '../store/asyncActions';



function MainBoard({ currentCity }) {
  const dispatch = useDispatch()
  const state = useSelector(state => state)
  const cityInfo = state.cityInfo
  const forecast = state.forecast

  useEffect(async () => {
    dispatch(fetchCityInfo(currentCity))
  }, [currentCity])

  useEffect(async () => {
    dispatch(fetchForecast(currentCity))
  }, [currentCity])

  return (
    <div className='main'>
        <Tabs cityInfo={cityInfo} forecast={forecast} />
        <FavoriteLocations />
    </div>
  );
 
}

export default MainBoard
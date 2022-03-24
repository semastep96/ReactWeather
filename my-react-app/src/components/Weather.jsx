import React, { useEffect, useState } from 'react'
import SearchForm from './SearchForm';
import MainBoard from './MainBoard';
import { useDispatch, useSelector } from 'react-redux';
import { updateCurrentCity } from '../store/actions';
import { currentCityApi } from '../js/currentCity';

function Weather() {
  const state = useSelector(state => state)
  const currentCity = state.currentCity
  const dispatch = useDispatch()

  function setCurrentCity(cityName) {
    dispatch(updateCurrentCity(cityName))
  }

  useEffect(() => {
    currentCityApi.save(currentCity)
  }, [currentCity])

  return(
    <div className="weather">
      <SearchForm setCurrentCity={setCurrentCity} />
        <MainBoard currentCity={currentCity} />
      <footer>
        made by semastep96<br/>tg: @semastep
      </footer>
    </div>
  );
}

export default Weather
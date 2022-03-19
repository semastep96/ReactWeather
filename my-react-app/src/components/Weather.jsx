import React, { useState } from 'react'
import SearchForm from './SearchForm';
import MainBoard from './MainBoard';
import { currentCityApi } from '../js/currentCity';

export const CurrentCityContext = React.createContext()

function Weather() {
  const currentCityFromCookies = currentCityApi.get()
  const [currentCity, setCurrentCity] = useState(currentCityFromCookies)

  return(
    <div className="weather">
      <SearchForm setCurrentCity={setCurrentCity} />
      <CurrentCityContext.Provider value={{currentCity: currentCity, setCity: setCurrentCity}}>
        <MainBoard currentCity={currentCity} />
      </CurrentCityContext.Provider>
      <footer>
        made by semastep96<br/>tg: @semastep
      </footer>
    </div>
  );
}

export default Weather
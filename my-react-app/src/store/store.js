import { createStore } from "redux"
import weatherAppCities from "./reducer.js"
import { currentCityApi } from "../js/currentCity.js"
import { favorites } from "../js/favorites.js"

const initialState = {
  currentCity: currentCityApi.get(),
  favoriteCities: [...favorites.cities]
}

const store = createStore(weatherAppCities, initialState)

export default store

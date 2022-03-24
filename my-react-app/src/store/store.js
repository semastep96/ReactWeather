import { createStore } from "redux"
import weatherAppCities from "./reducer.js"
import { currentCityApi } from "../js/currentCity.js"
import { storage } from "../js/storage.js"

const initialState = {
  currentCity: currentCityApi.get(),
  favoriteCities: [...storage.getFavoriteCities()]
}

const store = createStore(weatherAppCities, initialState)

export default store

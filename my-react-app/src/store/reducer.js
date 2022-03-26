import { ACTION_NAMES } from "./actions.js"
import { combineReducers } from "redux"
import { currentCityApi } from "../js/currentCity.js"
import { storage } from "../js/storage.js"

const initialState = {
  currentCity: currentCityApi.get(),
  favoriteCities: [...storage.getFavoriteCities()],
  cityInfo: {},
  forecast: {}
}

function currentCity(state = initialState.currentCity, action) {
  switch(action.type) {
    case ACTION_NAMES.UPDATE_CURRENT_CITY:
      return action.city
    default:
      return state
  }
}

function favoriteCities(state = initialState.favoriteCities, action) {
  switch(action.type) {
    case ACTION_NAMES.ADD_FAVORITE_CITY:
      const favorites = new Set([...state, action.city])
      return [...favorites]
    case ACTION_NAMES.DELETE_FAVORITE_CITY:
      return state.filter(city => city !== action.city)
    default:
      return state
  }
}

function cityInfo(state = initialState.cityInfo, action) {
  switch(action.type) {
    case ACTION_NAMES.GET_CITY_INFO:
      if (!action.info) return state
      return action.info
    default:
      return state
  }
}

function forecast(state = initialState.forecast, action) {
  switch(action.type) {
    case ACTION_NAMES.GET_FORECAST:
      if (!action.info) return state
      return action.info
    default:
      return state
  }
}

const weatherAppReducer = combineReducers({
  currentCity,
  favoriteCities,
  cityInfo,
  forecast
})

export default weatherAppReducer
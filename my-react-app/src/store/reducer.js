import { ACTION_NAMES } from "./actions.js"
import { combineReducers } from "redux"

const initialState = {
  currentCity: 'Aktobe',
  favoriteCities: []
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

const weatherAppCities = combineReducers({
  currentCity,
  favoriteCities
})

export default weatherAppCities
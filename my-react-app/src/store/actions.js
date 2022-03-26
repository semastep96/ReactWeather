export const ACTION_NAMES = {
  UPDATE_CURRENT_CITY: 'UPDATE_CURRENT_CITY',
  ADD_FAVORITE_CITY: 'ADD_FAVORITE_CITY',
  DELETE_FAVORITE_CITY: 'DELETE_FAVORITE_CITY',
  GET_CITY_INFO: 'GET_CITY_INFO',
  GET_FORECAST: 'GET_FORECAST'
}

export function getCityInfo(info) {
  return {
    type: ACTION_NAMES.GET_CITY_INFO,
    info
  }
}

export function getForecast(info) {
  return {
    type: ACTION_NAMES.GET_FORECAST,
    info
  }
}

export function updateCurrentCity(city) {
  return {
    type: ACTION_NAMES.UPDATE_CURRENT_CITY,
    city
  }
}

export function addFavoriteCity(city) {
  return {
    type: ACTION_NAMES.ADD_FAVORITE_CITY,
    city
  }
}

export function deleteFavoriteCity(city) {
  return {
    type: ACTION_NAMES.DELETE_FAVORITE_CITY,
    city
  }
}
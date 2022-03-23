export const ACTION_NAMES = {
  UPDATE_CURRENT_CITY: 'UPDATE_CURRENT_CITY',
  ADD_FAVORITE_CITY: 'ADD_FAVORITE_CITY',
  DELETE_FAVORITE_CITY: 'DELETE_FAVORITE_CITY'
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
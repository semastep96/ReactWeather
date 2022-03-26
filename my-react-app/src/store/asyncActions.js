import api from "../js/api"
import { getCityInfo, getForecast, updateCurrentCity } from "./actions"

export function fetchCityInfo(city) {
  return function (dispatch) {
    api.getCityInfo(city).then(info => {
      if (!info) return dispatch(updateCurrentCity('Aktobe'))
      return dispatch(getCityInfo(info))
    })
  }
}

export function fetchForecast(city) {
  return function(dispatch) {
    api.getForecast(city).then(info => {
      if (!info) return
      return dispatch(getForecast(info))
    })
  }
}
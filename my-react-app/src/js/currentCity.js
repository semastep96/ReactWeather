import Cookies from './js.cookie.mjs'

export const currentCityApi = {
  save: function (currentCity) {
    if (!currentCity) {
      return
    }
    const inYear = new Date(new Date().getTime() + 60 * 60 * 1000 * 365 * 24)
    Cookies.set("currentCity", currentCity, {
      expires: inYear
  })
  },
  get: function () {
    const currentCity = Cookies.get("currentCity")
    if (!currentCity) {
      return "Aktobe"
    }
    return currentCity
  },
}
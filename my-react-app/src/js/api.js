const serverUrl = 'https://api.openweathermap.org/data/2.5/weather';
const forecastServerUrl = 'https://api.openweathermap.org/data/2.5/forecast'
const apiKey = '03748c3d933becda4f57382488c55aee';
const metric = '&units=metric'

const api = {
  getCityInfo: async cityName => {
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}${metric}`;
    try {
      let response = await fetch(url)
      if (response.status === 404) {
        throw new Error("City is not found")
      }
      let info = await response.json()
      return info
    } catch (err) {}
  },
  getForecast: async cityName => {
    const url = `${forecastServerUrl}?q=${cityName}&appid=${apiKey}${metric}`;
    try {
      let response = await fetch(url)
      if (response.status === 404) {
        throw new Error("Forecast not found:(")
      }
      let forecast = await response.json()
      return forecast
    } catch (err) {}
  }
}

export default api
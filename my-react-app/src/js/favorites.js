import { storage } from "./storage"

export const favorites = {
  cities: storage.getFavoriteCities(),
  add: (city) => {
    favorites.cities.add(city)
    storage.saveFavoriteCities(favorites.cities)
  },
  delete: (city) => {
    favorites.cities.delete(city)
    storage.saveFavoriteCities(favorites.cities)
  }
}

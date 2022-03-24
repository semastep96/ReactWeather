import React, { useEffect } from "react";
import Location from "./Location";
import { useSelector } from "react-redux";
import { storage } from "../../js/storage";



function FavoriteLocations() {
  const state = useSelector(state => state)

  useEffect(() => {
    storage.saveFavoriteCities(state.favoriteCities)
  }, [state.favoriteCities])

  return (
    <div className="locations main__side">
      <h2 className="locations__header">
        Added Locations:
      </h2>
      <div className="locations__container">
      {state.favoriteCities.map(city => <Location key={city} name={city} />)}
      </div>
    </div>
  );
}

export default FavoriteLocations
import React from "react";
import Location from "./Location";
import { FavoritesContext } from "../MainBoard";

function FavoriteLocations() {
  return (
    <div className="locations main__side">
      <h2 className="locations__header">
        Added Locations:
      </h2>
      <div className="locations__container">
        <FavoritesContext.Consumer>
        {context => {
          return context.favoriteCities.map(city => <Location key={city} name={city} setFavorites={context.setFavoritesCities} />)
        }}
        </FavoritesContext.Consumer>
      </div>
    </div>
  );
}

export default FavoriteLocations
import React from "react";
import { favorites } from "../../js/favorites";
import { CurrentCityContext } from "../Weather";

function Location({ name, setFavorites } ) {
  return (
    <CurrentCityContext.Consumer>
    {context => <div className="location" onClick={() => {
      context.setCity(name)
    }}>{name} <button className="location__delete" onClick={() => {
      favorites.delete(name)
      setFavorites([...favorites.cities])
    }}></button></div>}
    </CurrentCityContext.Consumer>
  );
}

export default Location
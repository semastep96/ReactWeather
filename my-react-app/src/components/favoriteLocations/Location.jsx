import React from "react";
import { useDispatch } from "react-redux";
import { deleteFavoriteCity, updateCurrentCity } from "../../store/actions";

function Location({ name } ) {
  const dispatch = useDispatch()
  return (
    <div className="location" onClick={() => {
      dispatch(updateCurrentCity(name))
    }}>{name}
    <button className="location__delete" onClick={e => {
      e.stopPropagation()
      dispatch(deleteFavoriteCity(name))
    }} /></div>
  );
}

export default Location
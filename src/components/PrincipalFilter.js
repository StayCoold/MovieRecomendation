import React from "react";
import './styles/PrincipalFilter.css'
import { modifyStatus } from "./functional/functions";

export const PrincipalFilter = (props) => {
  

  return(
    <div className="container-main-filter">
      <div className="central-box">
        <h3>Que tipo de pelicula estas buscando?</h3>
        <select className="select-area-genere">
          <option className="options" value='cualquiera'>Cualquiera</option>
          {/* <option className="options" value='accion'>Accion</option>
          <option className="options" value='terror'>Terror</option>
          <option className="options" value='drama'>Drama</option>
          <option className="options" value='romance'>Romance</option>
          <option className="options" value='comedia'>Comedia</option> */}
        </select>
        <button onClick={()=>modifyStatus(props.setRecomended)} className="button-recomend">¡RECOMIENDAME!</button>
      </div>
    </div>
  );
}
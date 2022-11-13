import React, { useState } from "react";
import axios from 'axios';

import './FormularioAgregarPersona.css';



function FormularioAgregarPersona(props) {
  const [isCabezaHogar, setIsCabezaHogar] = useState(false);
  const [primerNombre, setPrimerNombre] = useState("");
  const [segundoNombre, setSegundoNombre] = useState("");
  const [primerApellido, setPrimerApellido] = useState("");
  const [segundoApellido, setSegundoApellido] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [tipoIdentificacion, setTipoIdentificacion] = useState("CC");
  const [numIdentificacion, setNumIdentificacion] = useState("");

  let content_data = {
    "first_name": primerNombre,
    "second_name": segundoNombre,
    "first_last_name": primerApellido,
    "second_last_name": segundoApellido,
    "date_birth": fechaNacimiento,
    "type_identification": tipoIdentificacion,
    "num_identification": numIdentificacion,
    "is_head_household": isCabezaHogar
  }

  function agregarPersona(data) {
    if (
      data.first_name !== "" && data.first_last_name !== "" &&
      data.date_birth !== "" && data.type_identification !== "" &&
      data.num_identification !== ""
    ) {

      axios.post("http://localhost:8000/api/post/", data)
        .then((response) => {
          const { data } = response;
        })
        .then(response => {
          window.location.reload()
        })
        .catch(err => console.log(err))

    } else {
      console.log(data)
      alert("Debe diligenciar los campos obligatorios");
    }
  }

  return (
    <div className="panel-formulario-agregar-persona">
      <div className="titulo-panel">
        <h4>CONFORMACIÓN Y CONDICIÓN SOCIOECONOMICA DEL HOGAR</h4>
      </div>
      <form
        onSubmit={ev => { ev.preventDefault(); }}>
        <div className="contenido-formulario">
          <input value={isCabezaHogar} onChange={(e) => { setIsCabezaHogar(e.target.checked) }} type={"checkbox"} /> Cabeza de hogar
          <div className="inputs-grid">
            <div>
              <label>Primer Nombre *</label>
              <input value={primerNombre} onChange={(e) => { setPrimerNombre(e.target.value) }} placeholder="Primer Nombre" />
            </div>
            <div>
              <label>Segundo Nombre</label>
              <input value={segundoNombre} onChange={(e) => { setSegundoNombre(e.target.value) }} placeholder="Segundo Nombre" />
            </div>
            <div>
              <label>Primer Apellido *</label>
              <input value={primerApellido} onChange={(e) => { setPrimerApellido(e.target.value) }} placeholder="Primer Apellido" />
            </div>
            <div>
              <label>Segundo Apellido</label>
              <input value={segundoApellido} onChange={(e) => { setSegundoApellido(e.target.value) }} placeholder="Segundo Apellido" />
            </div>
            <div>
              <label>Fecha Nacimiento *</label>
              <input value={fechaNacimiento} onChange={(e) => { setFechaNacimiento(e.target.value) }} type={"date"} placeholder="Fecha Nacimiento" />
            </div>
          </div>
          <div className="inputs-grid">
            <div>
              <label>Tipo Identificación *</label>
              <select value={tipoIdentificacion} onChange={(e) => { setTipoIdentificacion(e.target.value) }}>
                <option value={"CC"}>CC - Cedula Ciudadanía</option>
                <option value={"TI"}>TI - Tarjeta de Identidad</option>
                <option value={"CE"}>CE - Cedula Extranjeria</option>
              </select>
            </div>
            <div>
              <label>Numero Identificación *</label>
              <input value={numIdentificacion} onChange={(e) => { setNumIdentificacion(e.target.value) }} placeholder="Numero identificación" />
            </div>
          </div>
        </div>
        <div className="pnl-btn">
          <button onClick={() => { agregarPersona(content_data) }} type="submit" className="btn-agregar">Agregar</button>
        </div>
      </form>
    </div>
  );
}

export { FormularioAgregarPersona };
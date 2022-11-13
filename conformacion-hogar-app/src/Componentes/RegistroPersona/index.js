import React from "react";
import './RegistroPersona.css';

function RegistroPersona(props) {
    return (
        <div className="registro-persona">
            <span>{props.id}</span>
            <span>{props.perNombre}</span>
            <span>{props.sdoNombre}</span>
            <span>{props.perApellido}</span>
            <span>{props.sdoApellido}</span>
            <span>{props.fecNacimiento}</span>
            <span>{props.tipoIdentificacion}</span>
            <span>{props.numeroIdentificacion}</span>
            <span>{props.esCabezaHogar}</span>
        </div>
    );
}

export { RegistroPersona };
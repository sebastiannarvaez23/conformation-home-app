import React from "react";
import './PanelPersonasAgregadas.css';

function PanelPersonasAgregadas(props) {
    return (
        <div className="panel-personas-agregadas">
            <div className="cabecera-datos">
                <span>#</span>
                <span>1er Nombre</span>
                <span>2do Nombre</span>
                <span>1er Apellido</span>
                <span>2do Apellido</span>
                <span>Fec Nacimiento</span>
                <span>Tipo Id</span>
                <span>Num Id</span>
                <span>Cabeza Hogar</span>
            </div>
            <div>
                {props.children}
            </div>
        </div>
    );
}

export { PanelPersonasAgregadas };
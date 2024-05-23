import React from "react";
import './PanelSecundario.css';

function PanelSecundario(props) {
    return (
        <div className="panel-secundario">
            <h3>Solicitud de subsidio familiar de vivienda</h3>

            <div className="subtitulo">
                Conformación del hogar
            </div>
            {props.children}
        </div>
    );
}

export { PanelSecundario };
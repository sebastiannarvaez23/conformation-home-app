import logoComfandi from '../../comfandi.png';
import React from "react";
import './PanelPrincipal.css';

function PanelPrincipal(props) {
    return (
        <div className="panel-principal">
            <div className="logo-comfandi">
                <img src={logoComfandi} />
            </div>
            <h1>Inicio</h1>
            {props.children}
        </div>
    );
}

export { PanelPrincipal };
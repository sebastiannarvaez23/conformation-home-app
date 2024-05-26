import logoComfandi from './../../assets/comfandi.png';
import { ReactNode } from "react";
import './ContainMain.css';

interface ContainMainProps {
    children: ReactNode
}

function ContainMain({ children }: ContainMainProps) {
    return (
        <div className="panel-principal">
            <div className="logo-comfandi">
                <img src={logoComfandi} />
            </div>
            <h1>Inicio</h1>
            {children}
        </div>
    );
}

export { ContainMain };
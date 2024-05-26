import { ReactNode } from 'react';
import './ContainSecondary.css';

interface ContainSecondaryProps {
    children: ReactNode
}

function ContainSecondary({ children }: ContainSecondaryProps) {
    return (
        <div className="panel-secundario">
            <h3>Solicitud de subsidio familiar de vivienda</h3>

            <div className="subtitulo">
                Conformación del hogar
            </div>
            {children}
        </div>
    );
}

export { ContainSecondary };
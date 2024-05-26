import { ReactNode } from 'react';
import './ContainAddedPerson.css';

interface ContainAddedPersonProps {
    children: ReactNode;
}

function ContainAddedPerson({ children }: ContainAddedPersonProps): ReactNode {
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
                {children}
            </div>
        </div>
    );
}

export { ContainAddedPerson };
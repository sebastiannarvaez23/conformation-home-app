import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

//Components
import { PanelPrincipal } from './Componentes/PanelPrincipal';
import { PanelSecundario } from './Componentes/PanelSecundario';
import { FormularioAgregarPersona } from './Componentes/FormularioAgregarPersona';
import { PanelPersonasAgregadas } from './Componentes/PanelPersonasAgregadas';
import { RegistroPersona } from './Componentes/RegistroPersona';
import { RegistroCargando } from './Componentes/RegistroCargando';

function App() {
  const [personasList, setPersonasList] = useState()
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    axios.get("http://localhost:8000/api/get/")
      .then(response => {
        setPersonasList(response.data);
      })
      .catch(err => console.log(err))
      .finally(() => setLoaded(true))
  }, []);

  return (
    <React.Fragment>
      <PanelPrincipal>
        <PanelSecundario>
          <FormularioAgregarPersona />
          <PanelPersonasAgregadas
          personasList={setPersonasList}
          >
            {loaded && personasList.map(persona => (
              <RegistroPersona
                key={persona.id}
                id={persona.id}
                perNombre={persona.first_name}
                sdoNombre={persona.second_name}
                perApellido={persona.first_last_name}
                sdoApellido={persona.second_last_name}
                fecNacimiento={persona.date_birth}
                tipoIdentificacion={persona.type_identification}
                numeroIdentificacion={persona.num_identification}
                esCabezaHogar={persona.is_head_household && "Si" || !persona.is_head_household && "No"}
              />
            ))}
            {!loaded && <RegistroCargando /> }
          </PanelPersonasAgregadas>
        </PanelSecundario>
      </PanelPrincipal>
    </React.Fragment>
  );
}

export default App;

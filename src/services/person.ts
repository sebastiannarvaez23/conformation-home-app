import Swal from 'sweetalert2'
import api from "./api";

export const fetchGetPeople = async (): Promise<Person[]> => {
    const response = await api.get('person/get-people')
        .catch((error: any) => {
            throw new Error(`Error al obtener listado de Personas: ${error.message}`);
        })
    return response.data;
};

export const fetchCreatePerson = async (person: Person): Promise<Person> => {
    const response = await api.post('person/create-person', person, {
        headers: { 'Content-Type': 'application/json' }
    })
        .catch((error: any) => {
            throw new Error(`Error al crear Persona: ${error.message}`);
        })
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });
    Toast.fire({
        icon: "success",
        title: "Persona creada con exito!"
    });
    return response.data;
};

export const fetchGetTypesIdentification = async (): Promise<TypeIdentification[]> => {
    const response = await api.get('person/get-types-identification')
        .catch((error: any) => {
            throw new Error(`Error al obtener personajes: ${error.message}`);
        })
    console.log(response.data);
    return response.data;
};
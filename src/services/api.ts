import axios, { AxiosResponse } from 'axios';
import Swal from 'sweetalert2';

const BASE_URL = 'http://localhost:8000/api/v1/';
const TIMEOUT = 10000;

const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

api.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: any) => {
        if (error.response) {
            Swal.fire({
                title: 'Error!',
                text: error.response.data.msn_client,
                icon: 'error',
                confirmButtonText: 'Ok'
            })
            console.error('Error de respuesta:', error.response.status, error.response.data);
        } else if (error.request) {
            Swal.fire({
                title: 'Error!',
                text: error.response.data.msn_client,
                icon: 'error',
                confirmButtonText: 'Ok'
            })
            console.error('No se recibió respuesta del servidor:', error.request);
        } else {
            Swal.fire({
                title: 'Error!',
                text: error.response.data.msn_client,
                icon: 'error',
                confirmButtonText: 'Ok'
            })
            console.error('Error de configuración de la solicitud:', error.message);
        }
        return Promise.reject(error);
    }
);

export default api;

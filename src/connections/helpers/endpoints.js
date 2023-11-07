import axios from "axios";

const API_URL="http://localhost:4000/api"

export const registerRequest = user => axios.post(`${API_URL}/register`, user)
export const SIGIN_POST_ENDPOINT= API_URL+"/usuario/login"
export const MISPARTIDOS_GET_ENDPOINT= API_URL+"/usuario/mispartidos";
export const CREARPARTIDO_POST_ENDPOINT= API_URL+"/partido";
export const PARTIDOSCREADOS_GET_ENDPOINT= API_URL+"/partido";
export const PARTIDODETALLE_GET_ENDPOINT= API_URL+"/partido";
export const ELIMINARPARTIDO_DELETE_ENDPOINT= API_URL+"/partido";
export const ACTUALIZARPARTIDO_PUT_ENDPOINT= API_URL+"/partido";

 
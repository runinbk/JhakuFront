import axios from "axios";

const url = "http://proyectosi1-production-1c08.up.railway.app/usuario";

export const createUsuarioRequest = (newUsuario) => axios.post(url, newUsuario); // POST
export const getUsuariosRequest = () => axios.get(url); // GET's
export const deleteUsuarioRequest = (id) => axios.delete(`${url}/${id}`); // DELETE
export const getUsuarioRequest = (id) => axios.get(`${url}/${id}`); // GET
export const updateUsuarioRequest = (id, updatedUsuario) =>
  axios.put(`${url}/${id}`, updatedUsuario); // PUT

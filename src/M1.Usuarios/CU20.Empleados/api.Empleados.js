import axios from "axios";

const url = "http://proyectosi1-production-1c08.up.railway.app/empleado";

export const createEmpleadoRequest = (newEmpleado) =>
  axios.post(url, newEmpleado); // POST
export const getEmpleadosRequest = () => axios.get(url); // GET's
export const deleteEmpleadoRequest = (id) => axios.delete(`${url}/${id}`); // DELETE
export const getEmpleadoRequest = (id) => axios.get(`${url}/${id}`); // GET
export const updateEmpleadoRequest = (id, updatedEmpleado) =>
  axios.put(`${url}/${id}`, updatedEmpleado); // PUT

import axios from "axios";

const url = "http://proyectosi1-production-1c08.up.railway.app/rol";

export const createRolRequest = (newRol) => axios.post(url, newRol); // POST
export const getRolesRequest = () => axios.get(url); // GET's
export const deleteRolRequest = (id) => axios.delete(`${url}/${id}`); // DELETE
export const getRolRequest = (id) => axios.get(`${url}/${id}`); // GET
export const updateRolRequest = (id, updatedRol) =>
  axios.put(`${url}/${id}`, updatedRol); // PUT

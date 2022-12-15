import { useContext, useState } from "react";
import { RolContext } from "./Roles.context";
import {
  getRolesRequest,
  getRolRequest,
  createRolRequest,
  updateRolRequest,
  deleteRolRequest,
} from "./api.Roles";

export const useRol = () => {
  const context = useContext(RolContext);
  if (!context) {
    throw new Error("useRol debe estar dentro del RolProvider");
  }
  return context;
};

export const RolProvider = ({ children }) => {
  const [roles, setRoles] = useState([]);

  const getRoles = async () => {
    try {
      const response = await getRolesRequest();
      setRoles(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getRol = async (id) => {
    try {
      const response = await getRolRequest(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const createRol = async (rol) => {
    try {
      const response = await createRolRequest(rol);
      setRoles([...roles, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const updateRol = async (id, rol) => {
    try {
      const response = await updateRolRequest(id, rol);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const deleteRol = async (id) => {
    try {
      await deleteRolRequest(id);
      setRoles(roles.filter((rol) => rol.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <RolContext.Provider
      value={{
        roles,
        getRoles,
        getRol,
        createRol,
        updateRol,
        deleteRol,
      }}
    >
      {children}
    </RolContext.Provider>
  );
};

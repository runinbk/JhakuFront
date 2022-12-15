import { useContext, useState } from "react";
import { UsuarioContext } from "./Usuario.context";
import {
  getUsuariosRequest,
  getUsuarioRequest,
  createUsuarioRequest,
  updateUsuarioRequest,
  deleteUsuarioRequest,
} from "./usuarios.api";

export const useUsuario = () => {
  const context = useContext(UsuarioContext);
  if (!context) {
    throw new Error("useUsuario debe estar dentro del UsuarioProvider");
  }
  return context;
};

export const UsuarioProvider = ({ children }) => {
  const [usuarios, setUsuarios] = useState([]);

  const getUsuarios = async () => {
    try {
      const response = await getUsuariosRequest();
      setUsuarios(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getUsuario = async (id) => {
    try {
      const response = await getUsuarioRequest(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const createUsuario = async (usuario) => {
    try {
      const response = await createUsuarioRequest(usuario);
      setUsuarios([...usuarios, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const updateUsuario = async (id, usuario) => {
    try {
      const response = await updateUsuarioRequest(id, usuario);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const deleteUsuario = async (id) => {
    try {
      await deleteUsuarioRequest(id);
      setUsuarios(usuarios.filter((usuario) => usuario.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UsuarioContext.Provider
      value={{
        usuarios,
        getUsuarios,
        getUsuario,
        createUsuario,
        updateUsuario,
        deleteUsuario,
      }}
    >
      {children}
    </UsuarioContext.Provider>
  );
};

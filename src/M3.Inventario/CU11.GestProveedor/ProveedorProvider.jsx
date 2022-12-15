import { useContext, useState } from "react";
import { ProveedorContext } from "./ProveedorContext";
import {
  createProveedorRequest,
  getProveedoresRequest,
  updateProveedorRequest,
  deleteProveedorRequest,
  getProveedorRequest,
} from "./proveedor.api";

export const useProveedor = () => {
  const context = useContext(ProveedorContext);
  if (!context) {
    throw new Error("useProveedor debe estar dentro del proveedorProvider");
  }
  return context;
};

export const ProveedorContextProvider = ({ children }) => {
  const [proveedores, setProveedores] = useState([]);

  const getProveedores = async () => {
    try {
      const response = await getProveedoresRequest();
      setProveedores(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getProveedor = async (id) => {
    try {
      const response = await getProveedorRequest(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const createProveedor = async (proveedor) => {
    try {
      const response = await createProveedorRequest(proveedor);
      setProveedores([...proveedores, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const updateProveedor = async (id, proveedor) => {
    try {
      const response = await updateProveedorRequest(id, proveedor);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const deleteProveedor = async (id) => {
    try {
      await deleteProveedorRequest(id);
      setProveedores(proveedores.filter((proveedor) => proveedor.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ProveedorContext.Provider
      value={{
        proveedores,
        getProveedores,
        getProveedor,
        createProveedor,
        updateProveedor,
        deleteProveedor,
      }}
    >
      {children}
    </ProveedorContext.Provider>
  );
};

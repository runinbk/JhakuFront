import { useContext, useState } from "react";
import { UniMateriaContext } from "./UniMedida.context";
import {
  createUniMedidaRequest,
  deletUniMedidaRequest,
  getUniMedidaRequest,
  getUniMedidasRequest,
  updateUniMedidaRequest,
} from "./api.UniMedida";

export const useUniMedida = () => {
  const context = useContext(UniMateriaContext);
  if (!context) {
    throw new Error("useUniMedida must be used within a UniMedidaProvider");
  }
  return context;
};

export const UniMedidaContextProvider = ({ children }) => {
  const [uniMedidas, setUniMedidas] = useState([]);

  const getUniMedidas = async () => {
    try {
      const response = await getUniMedidasRequest();
      setUniMedidas(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getUniMedida = async (id) => {
    try {
      const response = await getUniMedidaRequest(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const createUniMedida = async (uniMedida) => {
    try {
      const response = await createUniMedidaRequest(uniMedida);
      setUniMedidas([...uniMedidas, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const updateUniMedida = async (id, newFields) => {
    try {
      const response = await updateUniMedidaRequest(id, newFields);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const deleteUniMedida = async (id) => {
    try {
      await deletUniMedidaRequest(id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UniMateriaContext.Provider
      value={{
        uniMedidas,
        getUniMedidas,
        getUniMedida,
        createUniMedida,
        updateUniMedida,
        deleteUniMedida,
      }}
    >
      {children}
    </UniMateriaContext.Provider>
  );
};

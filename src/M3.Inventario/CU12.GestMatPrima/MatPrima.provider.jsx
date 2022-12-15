import { useContext, useState } from "react";
import { MatPrimaContext } from "./MatPrima.context";
import {
  createMatPrimaRequest,
  deleteMatPrimaRequest,
  getMatPrimaRequest,
  getMatPrimasRequest,
  updateMatPrimaRequest,
} from "./api.MatPrima";

export const useMatPrima = () => {
  const context = useContext(MatPrimaContext);
  if (!context) {
    throw new Error("useMatPrima must be used within a MatPrimaProvider");
  }
  return context;
};

export const MatPrimaContextProvider = ({ children }) => {
  const [matPrimas, setMatPrimas] = useState([]);

  const getMatPrimas = async () => {
    try {
      const response = await getMatPrimasRequest();
      setMatPrimas(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getMatPrima = async (id) => {
    try {
      const response = await getMatPrimaRequest(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const createMatPrima = async (matPrima) => {
    try {
      const response = await createMatPrimaRequest(matPrima);
      setMatPrimas([...matPrimas, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const updateMatPrima = async (id, newFields) => {
    try {
      const response = await updateMatPrimaRequest(id, newFields);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const deleteMatPrima = async (id) => {
    try {
      await deleteMatPrimaRequest(id);
      setMatPrimas(matPrimas.filter((matPrima) => matPrima.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MatPrimaContext.Provider
      value={{
        matPrimas,
        getMatPrimas,
        getMatPrima,
        createMatPrima,
        updateMatPrima,
        deleteMatPrima,
      }}
    >
      {children}
    </MatPrimaContext.Provider>
  );
};

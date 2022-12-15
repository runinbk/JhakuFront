import { useContext, useState } from "react";
import { EmpleadoContext } from "./Empleados.context";
import {
  getEmpleadosRequest,
  getEmpleadoRequest,
  createEmpleadoRequest,
  updateEmpleadoRequest,
  deleteEmpleadoRequest,
} from "./api.Empleados";

export const useEmpleado = () => {
  const context = useContext(EmpleadoContext);
  if (!context) {
    throw new Error("useEmpleado debe estar dentro del EmpleadoProvider");
  }
  return context;
};

export const EmpleadoProvider = ({ children }) => {
  const [empleados, setEmpleados] = useState([]);

  const getEmpleados = async () => {
    try {
      const response = await getEmpleadosRequest();
      setEmpleados(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getEmpleado = async (id) => {
    try {
      const response = await getEmpleadoRequest(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const createEmpleado = async (empleado) => {
    try {
      const response = await createEmpleadoRequest(empleado);
      setEmpleados([...empleados, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const updateEmpleado = async (id, empleado) => {
    try {
      const response = await updateEmpleadoRequest(id, empleado);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const deleteEmpleado = async (id) => {
    try {
      await deleteEmpleadoRequest(id);
      setEmpleados(empleados.filter((empleado) => empleado.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <EmpleadoContext.Provider
      value={{
        empleados,
        getEmpleados,
        getEmpleado,
        createEmpleado,
        updateEmpleado,
        deleteEmpleado,
      }}
    >
      {children}
    </EmpleadoContext.Provider>
  );
};

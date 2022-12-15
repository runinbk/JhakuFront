import { useContext, useState } from "react";
import {
  createCliente,
  deleteCliente,
  getCliente,
  getClientes,
  updateCliente,
} from "./Cliente.api";

import { ClientContext } from "./ClientContext";

export const useClient = () => {
  const context = useContext(ClientContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export const ClientContextProvider = ({ children }) => {
  const [clients, setClients] = useState([]);

  const getClients = async () => {
    try {
      const response = await getClientes();
      setClients(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getClient = async (id) => {
    try {
      const response = await getCliente(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const createClient = async (client) => {
    try {
      const response = await createCliente(client);
      setClients([...clients, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const updateClient = async (id, newFields) => {
    try {
      const response = await updateCliente(id, newFields);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const deleteClient = async (id) => {
    try {
      await deleteCliente(id);
      setClients(clients.filter((client) => client.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ClientContext.Provider
      value={{
        clients,
        getClients,
        getClient,
        createClient,
        updateClient,
        deleteClient,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};

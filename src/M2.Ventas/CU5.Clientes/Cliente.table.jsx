import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { useState } from "react";
import { useClient } from "./ClientProvider";

export const ClienteTable = ({ client }) => {
  const [modalEliminar, setModalEliminar] = useState(false);
  const { deleteClient } = useClient();
  return (
    <>
      <tr>
        <td>{client.id}</td>
        <td>{client.nombre}</td>
        <td>{client.apellido}</td>
        <td>{client.ci}</td>
        <td>{client.telefono}</td>
        <td>{client.direccion}</td>
        <td>
          <button
            className="btn btn-primary"
            onClick={() => {
              // this.seleccionarEmpresa(empresa);
              // this.modalInsertar();
            }}
          >
            <FontAwesomeIcon icon={faEdit} />
          </button>
          {"   "}
          <button
            className="btn btn-danger"
            onClick={() => {
              setModalEliminar(true);
            }}
          >
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        </td>
      </tr>
      <Modal isOpen={modalEliminar}>
        <ModalBody>Estás seguro que deseas eliminar a al Cliente </ModalBody>
        <ModalFooter>
          <button
            className="btn btn-danger"
            onClick={() => {
              deleteClient(client.id);
              setModalEliminar(false);
            }}
          >
            Sí
          </button>
          <button
            className="btn btn-secundary"
            onClick={() => setModalEliminar(false)}
          >
            No
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
};

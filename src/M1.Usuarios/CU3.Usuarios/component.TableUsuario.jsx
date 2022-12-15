import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { useUsuario } from "./Usuario.provider";

import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { useState } from "react";

export const ProveedorTable = ({ usuario }) => {
  const [modalEliminar, setModalEliminar] = useState(false);
  const { deleteUsuario } = useUsuario();

  return (
    <>
      <tr>
        <td>{usuario.id}</td>
        <td>{usuario.login}</td>
        <td>{usuario.Password}</td>
        <td>{usuario.idEmpleado}</td>
        <td>{usuario.idRol}</td>
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
        <ModalBody>Estás seguro que deseas eliminar a al Usuario</ModalBody>
        <ModalFooter>
          <button
            className="btn btn-danger"
            onClick={() => {
              deleteUsuario(usuario.id);
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

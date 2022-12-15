import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { useState } from "react";
import { useUniMedida } from "./UniMedida.provider";

export const UniMedidaTable = ({ uniMedida }) => {
  const [modalEliminar, setModalEliminar] = useState(false);
  const { deleteUniMedida } = useUniMedida();
  return (
    <>
      <tr>
        <td>{uniMedida.id}</td>
        <td>{uniMedida.nombre}</td>
        <td>{uniMedida.abreviatura}</td>
        <td>
          <button
            className="btn btn-primary"
            onClick={() => {
              // this.setState({ form: data, tipoModal: "actualizar" });
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
        <ModalBody>Estás seguro que deseas eliminar a al proveedor</ModalBody>
        <ModalFooter>
          <button
            className="btn btn-danger"
            onClick={() => {
              deleteUniMedida(uniMedida.id);
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

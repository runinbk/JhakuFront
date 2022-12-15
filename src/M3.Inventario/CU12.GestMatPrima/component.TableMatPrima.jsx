import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { useState } from "react";
import { useMatPrima } from "./MatPrima.provider";

export const MatPrimaTable = ({ matPrima }) => {
  const [modalEliminar, setModalEliminar] = useState(false);
  const { deleteMatPrima } = useMatPrima();
  return (
    <>
      <tr>
        <td>{matPrima.id}</td>
        <td>{matPrima.nombre}</td>
        <td>{matPrima.stock}</td>
        <td>{matPrima.stockMinimo}</td>
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
              deleteMatPrima(matPrima.id);
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

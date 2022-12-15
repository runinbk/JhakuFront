import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { useState } from "react";
import { useEmpleado } from "./Empleados.provider";

export const EmpleadoTable = ({ empleado }) => {
  const [modalEliminar, setModalEliminar] = useState(false);
  const { deleteEmpleado } = useEmpleado();
  return (
    <>
      <tr>
        <td>{empleado.id}</td>
        <td>{empleado.nombre}</td>
        <td>{empleado.apellido}</td>
        <td>{empleado.ci}</td>
        <td>{empleado.direccion}</td>
        <td>{empleado.sexo}</td>
        <td>{empleado.fechaNacimiento}</td>
        <td>{empleado.idCargo}</td>
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
        <ModalBody>Estás seguro que deseas eliminar a al Empleado</ModalBody>
        <ModalFooter>
          <button
            className="btn btn-danger"
            onClick={() => {
              deleteEmpleado(empleado.id);
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

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export const EmpleadoTable = ({ empleado }) => {
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
              // this.seleccionarEmpresa(empresa);
              // this.setState({ modalEliminar: true });
            }}
          >
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        </td>
      </tr>
      {/* <Modal isOpen={this.state.modalEliminar}>
                <ModalBody>
                    Estás seguro que deseas eliminar a al proveedor {$``}
                </ModalBody>
                <ModalFooter>
                    <button
                    className="btn btn-danger"
                    onClick={() => this.peticionDelete()}
                    >
                    Sí
                    </button>
                    <button
                    className="btn btn-secundary"
                    onClick={() => this.setState({ modalEliminar: false })}
                    >
                    No
                    </button>
                </ModalFooter>
                </Modal> */}
    </>
  );
};

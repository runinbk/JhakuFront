import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export const ProductoTable = ({ producto }) => {
  return (
    <>
      <tr>
        <td>{producto.id}</td>
        <td>{producto.nombre}</td>
        <td>{producto.precio}</td>
        <td>{producto.cantidad}</td>
        <td>{producto.descripcion}</td>
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

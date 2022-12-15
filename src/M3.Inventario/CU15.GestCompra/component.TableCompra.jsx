import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export const CompraTable = ({ compra }) => {
  return (
    <tr>
      <td>{compra.id}</td>
      <td>{compra.fecha}</td>
      <td>{compra.total}</td>
      <td>{compra.idEmpleado}</td>
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
            // this.setState({ form: data });
            // this.modalEliminar();
          }}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </td>
    </tr>
  );
};

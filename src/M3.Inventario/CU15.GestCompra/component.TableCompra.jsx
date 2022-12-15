import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { useState } from "react";
import { useCompra } from "./Compra.provider";

export const CompraTable = ({ compra }) => {
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);
  const { deleteCompra } = useCompra();

  const handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      form: {
        ...prevState.form,
        [name]: value,
      },
    }));
  };

  return (
    <>
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
              setModalInsertar(ture);
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
      {/*                                                   */}
      {/* <Modal isOpen={modalInsertar}>
        <ModalHeader style={{ display: "block" }}>
          <span
            style={{ float: "right" }}
            onClick={() => setModalInsertar(false)}
          >
            x
          </span>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label htmlFor="id">ID</label>
            <input
              className="form-control"
              type="text"
              name="id"
              id="id"
              readOnly
              onChange={handleChange}
              value={form ? form.id : this.state.data.length + 1}
            />
            <br />
            <label htmlFor="nombre">Nombre</label>
            <input
              className="form-control"
              type="text"
              name="nombre"
              id="nombre"
              onChange={handleChange}
              value={form ? form.nombre : ""}
            />
            <br />
            <label htmlFor="nombre">País</label>
            <input
              className="form-control"
              type="text"
              name="pais"
              id="pais"
              onChange={handleChange}
              value={form ? form.pais : ""}
            />
            <br />
            <label htmlFor="capital_bursatil">Capital Bursatil</label>
            <input
              className="form-control"
              type="text"
              name="capital_bursatil"
              id="capital_bursatil"
              onChange={handleChange}
              value={form ? form.capital_bursatil : ""}
            />
          </div>
        </ModalBody>

        <ModalFooter>
          {this.state.tipoModal == "insertar" ? (
            <button
              className="btn btn-success"
              onClick={() => this.peticionPost()}
            >
              Insertar
            </button>
          ) : (
            <button
              className="btn btn-primary"
              onClick={() => this.peticionPut()}
            >
              Actualizar
            </button>
          )}
          <button
            className="btn btn-danger"
            onClick={() => this.modalInsertar()}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal> */}
      {/*                                                    */}
      <Modal isOpen={modalEliminar}>
        <ModalBody>Estás seguro que deseas eliminar a al proveedor</ModalBody>
        <ModalFooter>
          <button
            className="btn btn-danger"
            onClick={() => {
              deleteCompra(compra.id);
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

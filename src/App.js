import "./App.css";
import { useState } from "react";
import TableBody from "./components/TableBody";
import Form from "./components/Form";
import PERSONS from "./components/mockdata";

import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  //boostrap
  const [show, setShow] = useState(false);
  const handleCloseRemove = () => setShow(false);
  const handleShowRemove = () => setShow(true);
  //custom

  const [persons, setPersons] = useState(PERSONS);
  const [modalAdd, setModalAdd] = useState(false);
  const [newPerson, setNewPerson] = useState({});
  const [newID, setNewID] = useState(PERSONS.length + 1);
  const [editId, setEditId] = useState('0');
  const [editMode, setEditMode] = useState(false);
  const [removeId, setRemoveId] = useState("0");

  const removeClick = (id) => {
    setPersons(persons.filter( (person) => person.id !== id))
  }

  return (
    <>
      <div className="container">
        <h1>Danh sách học viên</h1>
        <div className="table-container">
          <button className="add-btn" onClick={() => setModalAdd(true)}>
            <i className="fas fa-plus-circle add-icon"></i> Thêm học viên
          </button>
          <table className="list-table">
            <thead>
              <tr>
                <th className="name">Họ tên</th>
                <th className="year">Năm sinh</th>
                <th className="email">Email</th>
                <th className="phone">Số điện thoại</th>
                <th className="customize"></th>
              </tr>
            </thead>
            <TableBody persons={persons} handleShowRemove={handleShowRemove} setRemoveId={setRemoveId} setEditId = {setEditId} setModalAdd ={setModalAdd} setEditMode={setEditMode} setNewPerson={setNewPerson} />
          </table>
        </div>
      </div>
      {modalAdd && (
        <Form
          setModalAdd={setModalAdd}
          persons={persons}
          setPersons={setPersons}
          newID={newID}
          setNewID={setNewID}
          editMode = {editMode}
          editId = {editId}
          setEditMode = {setEditMode}
          newPerson = {newPerson}
          setNewPerson = {setNewPerson}
        />
      )}
      <Modal show={show} onHide={handleCloseRemove}>
        <Modal.Header closeButton>
          <Modal.Title>Xóa</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bạn có chắc chắn muốn xóa không!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseRemove}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => {handleCloseRemove(); removeClick(removeId)} }>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default App;

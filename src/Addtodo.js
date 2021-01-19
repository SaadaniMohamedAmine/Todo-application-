import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { Button, Modal } from "react-bootstrap";
import { addTodo } from "./actions/todosActions";

const Addtodo = ({ todoList }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    status: "notDone",
  });
  const handleChange = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  const clearTodo = () => {
    setTodo({
      title: "",
      description: "",
      status: "notDone",
    });
  };
  return (
    <>
      <Button className="add-btn" variant="primary" onClick={handleShow}>
        new todo
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-add">
            <div>
              <span>Title</span>
              <input type="text" name="title" onChange={handleChange} />
            </div>
            <div>
              <span>Description</span>
              <input type="text" name="description" onChange={handleChange} />
            </div>
            <div>
              <span>Status</span>
              <p>NotDone</p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              dispatch(addTodo(todo));
              clearTodo();
              handleClose();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Addtodo;

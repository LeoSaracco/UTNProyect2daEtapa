import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const ModalDog = ({ setDogs, dogs }) => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState();

  const handleClose = () => {
    setShow(false)
  };
  const handleSave = () => {
    if (value.includes(".jpg")) {
      setDogs(dogs => [...dogs, value]);
      setShow(false)
    } else {
      alert("Pone un formato .jpg papu")
    }
  };
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <b>Add picture dog</b>
      </Button>

      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar imagen</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="text"
              value={value || ''}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Debe ser formato .jpg"
              autoFocus
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDog;
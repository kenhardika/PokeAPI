import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function StatusModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="info" onClick={handleShow}>
        Status
      </Button>
      <Modal show={show} onHide={handleClose} dialogClassName='custom-dialog'>
        <Modal.Header closeButton>
          <Modal.Title>Status:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Woohoo, you're reading this text in a modal!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default StatusModal;
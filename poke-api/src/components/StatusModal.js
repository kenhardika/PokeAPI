import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import uniqid from 'uniqid';

function StatusModal({data}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    console.log(data);
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
            {
             data.map((item)=>{
                return   <article key={uniqid()}>
                             <h5 key={uniqid()}> {item.stat.name}: {item.base_stat} </h5>
                         </article>
             })
             }
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
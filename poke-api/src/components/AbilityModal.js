import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import uniqid from 'uniqid';

function AbilityModal({data}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant="info" onClick={handleShow}>
        Ability
      </Button>
      <Modal show={show} onHide={handleClose} dialogClassName='custom-dialog'>
        <Modal.Header closeButton>
          <Modal.Title>Ability:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {
                data.map((item)=>{
                   return   <article key={uniqid()}>
                                <h5 key={uniqid()}> {item.ability.name} </h5>
                                <h6 key={uniqid()}> {item.ability.url.data.effect_entries[1].effect} </h6>
                            </article>
                })
            }
            {/* <h5> Abilits </h5> */}
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
export default AbilityModal;
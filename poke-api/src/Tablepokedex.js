import React, { useState } from 'react';
import Table from 'react-bootstrap/esm/Table';
import uniqid from "uniqid";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import fetchLinkPokemon from './utils/fetchLinkPokemon';

function Tablepokedex({data}) {
  const [showAbility, setShowAbility] = useState(false);
  const [showStatus, setShowStatus] = useState(false);

  const [ability, setAbility] = useState([]);
  const [status, setStatus] = useState([]);
  
  const handleClose = () =>  {
    setShowAbility(false);
    setShowStatus(false);
  };
  const handleShow = (param) => {
    if(param === 'ability'){
      setShowStatus(false);
      setShowAbility(true);
    }
    else{
      setShowAbility(false);
      setShowStatus(true);
    }
  };

  const handleClickCallAPI = async (name, type)=>{
      const responseAPI = await fetchLinkPokemon(`https://pokeapi.co/api/v2/pokemon/${name}`);
      if(type === 'abilities'){
        setAbility(responseAPI.data[type]);
      }
      else if(type === 'stats'){
        setStatus(responseAPI.data[type])
      }
      return ;
  }

    return (
        <div className='tablePokedex'>
          <Modal show={showAbility} onHide={handleClose} dialogClassName='custom-dialog' >
            <Modal.Header closeButton>
              <Modal.Title>Ability:</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {
                ability.map((item)=><h5 key={uniqid()}> {item.ability.name} </h5>)
              }
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            </Modal.Footer>
        </Modal>
        <Modal show={showStatus} onHide={handleClose} dialogClassName='custom-dialog'>
            <Modal.Header closeButton>
              <Modal.Title>Status:</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {
                status.map((item)=><h5 key={uniqid()}> {item.stat.name}: {item.base_stat} </h5>)
              }
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            </Modal.Footer>
        </Modal>
        
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nama Pokemon</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((res)=>
              <tr key={uniqid()}>
                <td key={uniqid()}>{res.name}</td>
                <td className='layerButton'>
                    <Button variant="info" 
                        onClick={()=>{
                            handleShow('ability');
                            handleClickCallAPI(res.name, 'abilities');
                    }}>Ability</Button>
                    <Button variant="info" 
                        onClick={()=>{
                            handleShow('status');
                            handleClickCallAPI(res.name, 'stats');
                    }}>Status</Button>
                </td>
              </tr>)
            }
            
          </tbody>
        </Table>
        </div>
    );
}

export default Tablepokedex;
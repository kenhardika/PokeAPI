import React, { } from 'react';
import Table from 'react-bootstrap/esm/Table';
import uniqid from "uniqid";
import AbilityModal from './components/AbilityModal';
import StatusModal from './components/StatusModal';


function Tablepokedex({data}) {
  // console.log(data[0].location_area_encounters.data[0].location_area.name);
  // console.log(data);
    return (
        <div className='tablePokedex'>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <th>Nama Pokemon</th>
              <th>Base Experience</th>
              <th>Location_area_encounters</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((res)=>
              <tr key={uniqid()}>
                <td key={uniqid()}>{res.id}</td>
                <td key={uniqid()}>{res.name}</td>
                <td key={uniqid()}>{res.base_experience}</td>
                <td width={'60%'} key={uniqid()}> {res.location_area_encounters.data.map((item)=> item.location_area.name + ', ')} </td>
                <td className='layerButton'>
                    <AbilityModal data={res.abilities}/> <StatusModal data={res.stats}/>
                </td>
              </tr>)
            }
            
          </tbody>
        </Table>
        </div>
    );
}

export default Tablepokedex;
import React, { useCallback, useEffect, useState } from 'react';
import Table from 'react-bootstrap/esm/Table';
import uniqid from "uniqid";
import fetchDataPokemon from './utils/fetchDataPokemon';

function Tablepokedex({data}) {
  // console.log(data[0].location_area_encounters.data[0].location_area.name);
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
                <td key={uniqid()}> {res.location_area_encounters.data.map((item)=> item.location_area.name + '')} </td>
              </tr>)
            }
            { 
              // :
              // <p>loading</p>
              /* <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td> ability + status </td>
            </tr> */}
          </tbody>
        </Table>
        </div>
    );
}

export default Tablepokedex;
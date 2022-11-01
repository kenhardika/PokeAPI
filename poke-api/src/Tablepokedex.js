import React from 'react';
import Table from 'react-bootstrap/esm/Table';


function Tablepokedex({data}) {
  console.log(data);
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
              data.results.map((res)=>
              <tr>
                <td>"ID"</td> 
                <td>{res.name}</td> 
              </tr> )
            }
            {/* <tr>
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
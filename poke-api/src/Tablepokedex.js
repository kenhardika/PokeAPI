import React from 'react';
import Table from 'react-bootstrap/esm/Table';
function Tablepokedex(props) {
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
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td> ability + status </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td >Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
        </div>
    );
}

export default Tablepokedex;
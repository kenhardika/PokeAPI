import React from 'react';
import Button from 'react-bootstrap/Button';

function TableNavigation({handlePrevPage, handleNextPage}) {

    return (
        <div className='tableNavigation'>
            <Button variant='primary' onClick={(e)=>handlePrevPage(e)}>prev</Button>
            <Button variant='primary' onClick={(e)=>handleNextPage(e)}>next</Button>
        </div>
    );
}

export default TableNavigation;
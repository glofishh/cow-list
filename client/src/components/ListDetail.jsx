import React from 'react';
import ReactDOM from 'react-dom';

const ListDetail=(props)=>{
  const {list}=props;
  return(
    <td>
      description:{list.description}
    </td>
  )
}


export default ListDetail;
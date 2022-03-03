import React from 'react';
import ReactWhatsapp from 'react-whatsapp';
const Whatsapp = (props) => {
    if(props.wp===1)
    {
      return <ReactWhatsapp number={`+91`+props.number}>  
      <button className='btn btn-success'>
      <i class="fab fa-whatsapp-square"></i>
      </button>
   
     </ReactWhatsapp> 
    }
  return <div>
    
  </div>;
};

export default Whatsapp;

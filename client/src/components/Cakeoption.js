import React from 'react';

const Cakeoption = (props) => {
    const {cake}=props;
  return(
      <option value={cake._id} key={cake.cakename}>{cake.cakename}</option>     
  )
};

export default Cakeoption;

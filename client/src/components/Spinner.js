import React from 'react'
// import loading from './ajax-loader'
import loading from '../images/ajax-loader.gif'
const Spinner = (props) => {
  return (
    <div className="text-center">
         <img src={loading} alt="loading" />
    </div>
  )
}

export default Spinner
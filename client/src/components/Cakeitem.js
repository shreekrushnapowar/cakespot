import React, { useContext } from 'react'
import contextValue from "../Contet/cakes/Cakecontext"
// import { Link } from 'react-router-dom';

const Cakeitem = (props) => {
    
    const context = useContext(contextValue)
    const {DeleteCake}=context;
    const {cake,updateCake,showAlert}=props;
   
    return (
        <div className="col-md-3">
                  
            <div className="card my-3">
                <div className="card-header">
                This is Cake
            </div>
                 <div className="card-body">
                   <h5 className="card-title">{cake.cakename}</h5>
                   <p className="card-text">Amount:{cake.amount}</p>
                   <i className="far fa-trash-alt mx-2" onClick={()=>{DeleteCake(cake._id,showAlert)}}></i>
                   <i className="far fa-edit mx-2 " onClick={()=>{updateCake(cake)}}></i>
                  {/* <i className="far fa-edit mx-2 " onClick={()=>{updateNote(note)}} ></i> */}
            </div>
            </div>
         </div>
    )
}

export default Cakeitem

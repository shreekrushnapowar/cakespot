import React,{useContext,useEffect,useRef,useState} from 'react'
import contextValue from "../Contet/cakes/Cakecontext"
import Cakeitem from './Cakeitem';

const Cakes = (props) => {
    
    const context = useContext(contextValue);
    const {cakes,getCakes,editcake}=context;
    const ref=useRef(null);
    const refClose=useRef(null);
    const [cake, setcake] = useState({id:"",cakename:"",amount:""})

     useEffect(() => {
        getCakes();
        // eslint-disable-next-line
     }, [])

     const updateCake=(currentcake)=>{
        ref.current.click(); 
        setcake({id:currentcake._id,cakename:currentcake.cakename,amount:currentcake.amount});
          
        }

        const onChange=(e)=>{
            setcake({...cake,[e.target.name]:e.target.value})
        }

        const handleClick=()=>{
           
            editcake(cake.id,cake.cakename,cake.amount)
            refClose.current.click();
            props.showAlert('Updated successfully','success')
        }

    return (
        <>
        <button ref={ref} type="button" className="d-none btn btn-primary" data-bs-toggle="modal"       data-bs-target="#exampleModal">
                      Launch demo modal
        </button>
              
              
              <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"  aria-hidden="true">
              <div className="modal-dialog">
              <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Edit Cake</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
              <div className="mb-3">
                           <label htmlFor="title" className="form-label">CakeName</label>
                           <input type="text" className="form-control" id="cakename"  name="cakename" aria-describedby="emailHelp" onChange={onChange} value={cake.cakename}  />
                  
                        </div>
                        <div className="mb-3">
                          <label htmlFor="edescription" className="form-label">Amount</label>
                          <input type="number" className="form-control" id="amount" name="amount" onChange={onChange} value={cake.amount}   required/>
                        </div>
              </div>
              <div className="modal-footer">
                <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button  onClick={handleClick} type="button" className="btn btn-primary">Update changes</button>
              </div>
              </div>
              </div>
              </div>
        
        <div className="row my-3">
               <h1>These Are Your Cakes</h1>
           {cakes.map((cake)=>{
            //    return cake.cakename
               return <Cakeitem key={cake._id} loading={props.loading} setloading={props.setloading}  cake={cake} updateCake={updateCake}/>
           })}
            
        </div>
        </>
    )
}

export default Cakes

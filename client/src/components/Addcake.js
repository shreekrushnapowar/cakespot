import React,{useContext,useState} from 'react'
import contextValue from "../Contet/cakes/Cakecontext"

const Addcake = (props) => {
    const context = useContext(contextValue);
    const {AddCake}=context;
    const [cake, setCake] = useState({cakename:"",amount:""})
    const handleClick = (e)=>{
        e.preventDefault();
        props.setloading(true);
        AddCake(cake.cakename,cake.amount);
        setCake({cakename:"",amount:""});
        props.showAlert('Added successfully','success');
        props.setloading(false);
       
    }
    const onChange=(e)=>{
        // console.log(e.target.name,e.target.value);
        // setCake({...cake, [e.target.name]:e.target.value})
        setCake({...cake,[e.target.name]:e.target.value})
        
    }
    return (
        <div>
            <form>
            <h1>Add Cakes</h1>
                <div className="mb-3">
                  <label htmlFor="cakename" className="form-label">Cake Name</label>
                  <input type="text" className="form-control" name="cakename" id="cakename" onChange={onChange}/>
                </div>
                <div className="mb-3">
                  <label htmlFor="Amount" className="form-label">Amount</label>
                  <input type="number" className="form-control" name="amount" id="amount" onChange={onChange}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
            </form> 
        </div>
    )
}

export default Addcake

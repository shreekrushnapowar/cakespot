import React ,{useContext,useState}from 'react'
import contextValue from '../Contet/cakes/Cakecontext'
import CustomerList from './CustomerList';
import Spinner from './Spinner';
// import Spinner from './Spinner'
const Customer = (props) => {
  const {load, setload} = props;
    const context = useContext(contextValue);
    const {customers,getcustomer}=context;
    const currentdate=new Date();
   var count=0;
   
    const [from, setfdate] = useState(currentdate);
    const [to, settdate] = useState(currentdate);

    // useEffect(() => {
    //     getcustomer(date);
    //     // eslint-disable-next-line
    //  }, [])
     const Onchangefdate=(e)=>
     {
        // dateYMD: Moment("01-07-1994").format('YYYY-MM-DD')
        setfdate({...from,[e.target.name]:e.target.value})   
     }
     const Onchangetdate=(e)=>{
      setload(true);
        settdate({...to,[e.target.name]:e.target.value})  
        getcustomer(from['fromdate'],to);
        setload(false);
     }
    return (
        <div>
            <form>
             <div className="mb-3">
               <label htmlFor="date" className="form-label mx-3">Select StartDate:</label>
               <input type="date"  id="fromdate" name="fromdate" onChange={Onchangefdate}/> <br/>  
               <label htmlFor="date" className="form-label mx-3">Select EndDate:  </label>
               <input type="date"  id="todate" name="todate" onChange={Onchangetdate}/>                 
             </div>
            </form>
              <h1>Customers</h1>
              <table className="table">
               <thead className="thead-dark">   
                   <tr>
                     <th scope="col">SR.NO</th>
                     <th scope="col">Name</th>
                     <th scope="col">Cake</th>  
                     <th scope="col">Number</th>
                     <th scope="col">Date</th>              
                     <th scope="col">Amount</th>
                    
                   </tr>
                 </thead>
                 <tbody>  
                 {load&&<Spinner/>}
                {customers.map((customer)=>{
                         //return cake.cakename
                        //return <Cakeitem key={cake._id}  cake={cake} updateCake={updateCake}/> 
                             
                          return <CustomerList key={customer._id} count={++count} customer={customer} />
                    //    return console.log("count",++count);                              
                })}
                 </tbody>
               </table>
            
        </div>
    )
}

export default Customer

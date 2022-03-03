import React,{useContext,useEffect,useState} from 'react';
import initialcontext from '../Contet/cakes/Cakecontext'
// import Renderpdf from '../Pdffolder/Renderpdf';
import Whatsapp from '../Pdffolder/Whatsapp';
import Cakeoption from './Cakeoption';
import Downloadpdf from './Downloadpdf';

const AddCustomer = (props) => {
    const context = useContext(initialcontext);
    const {cakes,getCakes,AddCustomer}=context;

          const [pdf, setpdf] = useState(0);
          const [billid, setbillid] = useState('');
          const [customer, setcustomer] = useState({customername:"",number:"",amountpaid:"",cake:""}); 
          const [cakeamount, setcakeamount] = useState(0); 
         const [wp, setwp] = useState(0);
         const [cakeitm, setcakeitm] = useState();
    useEffect(() => {
        getCakes();
        // eslint-disable-next-line       
       }, []);

     const getamount=(event)=>
     {  
      // setcustomer({...customer,cake:event.target.value})
      console.log('tareget',event.target.key);
      for (let index = 0; index < cakes.length; index++) {
        const element = cakes[index];
        if(element._id===event.target.value)
        {
          // setcakeamount();       
          setcakeamount(cakes[index].amount);
          setcustomer({...customer,[event.target.name]:event.target.value})
      
        //  newNotes[index].description=description;
        //  newNotes[index].tag=tag;
         break;          
        }       
       }
     } 
     
       const handleClick=async(e)=>{
        const host="http://localhost:3300";
           e.preventDefault();
          //  AddCustomer(customer.customername,customer.number,customer.amountpaid,customer.cake);
          const id= await AddCustomer(customer.cake,customer.customername,customer.number,customer.amountpaid);
          //  console.log('hello',id);
          // const customorid=id['_id'];
          setbillid(id['_id']);
          const response = await fetch(`${host}/getperticularcake/${customer.cake}`, {
            method: 'GET', 
            headers: {
              'Content-Type': 'application/json',
            }
          }); 
          const json=await response.json();
          // console.log('thuis is',json.cakes.cakename);
          const cakeitmm=json.cakes.cakename;
          setcakeitm(cakeitmm);
           props.showAlert('successfully Added','success')
           setpdf(1);
          //  setwp(1);
          
        // console.log(customer.customername,customer.number,customer.cake,customer.amountpaid);
       }
       const onChange=(e)=>{
           setcustomer({...customer,[e.target.name]:e.target.value})

       }
      

  return(  <section id="header" className=''>
    <div className="container-fluid nav_bg">
    <div className="col-10 mx-auto"> 
    <div>
    <form>
    <h1>Add Customer</h1>
        <div className="mb-3">
          <label htmlFor="customername" className="form-label">Customer Name</label>
          <input type="text" className="form-control" name="customername" id="customername" onChange={onChange}/>
        </div>

        <div className="mb-3">
          <label htmlFor="number" className="form-label">Customer Number</label>
          <input type="number" className="form-control" name="number" id="number" onChange={onChange}/>
        </div>      
        <div className="mb-3">
         <label htmlFor="select cake">Select Cake</label>
      <select className="form-control" id="cake" key="cake"  name="cake" onChange={getamount}>
             <option>Select Cake</option>
           {cakes.map((cake)=>{
            //    return cake.cakename
            //    return <Cakeitem key={cake._id}  cake={cake} updateCake={updateCake}/>
                return <Cakeoption key={cake._id} cake={cake}/>
           })}
         </select>
        </div>
        <div className="mb-3">
          <label htmlFor="amountpaid" className="form-label">Amount (<span style={{color: "red"}}>{cakeamount}</span>)</label>
          <input type="number" className="form-control" onChange={onChange}  name="amountpaid" id="amountpaid" />
        </div>
        <button disabled={customer.number.length<10 || customer.number.length>10} type="submit" className="btn btn-primary"  onClick={handleClick} >Submit</button>
    </form> 
    {/* <Renderpdf pdf={pdf} setwp={setwp} wp={wp} customername={customer.customername} customernumber={customer.number} cakeamount={customer.amountpaid} cakename={cakeitm}/> */}
    <Downloadpdf pdf={pdf} setwp={setwp} wp={wp} customername={customer.customername} customernumber={customer.number} cakeamount={customer.amountpaid} cakename={cakeitm} 
    billid={billid}/>
    <br/>
   <Whatsapp  wp={wp} number={customer.number} />
</div>
</div>
</div>
</section>
  ) 
  
};

export default AddCustomer;

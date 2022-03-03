import React from "react";
import CakeContext from "./Cakecontext";
import { useState } from "react";
const CakeState=(props)=>{
    const host="http://localhost:3300";
    const initialcakes=[];      
    const initialcustomer=[];
    // const initialamount=0;
               const [cakes, setcakes] = useState(initialcakes);
               const [customers, setcustomer] = useState(initialcustomer);
               const [cakeamount, setcakeamount] = useState(0);
      // eslint-disable-next-line

      //  Get all Cakes
      const getCakes=async()=>
      {      
          const response = await fetch(`${host}/fetchallcakes`, {
            method: 'GET', 
            headers: {
              'Content-Type': 'application/json',
            }
          }); 
           const json=await response.json();

           setcakes(json);
      }


      //Add Cake
      const AddCake=async (cakename,amount)=>
      {
        const response = await fetch(`${host}/addcake`, {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({cakename,amount}) 
        }); 
         const json=await response.json();
         console.log(json);
         setcakes(cakes.concat(json));

        //  setcakes(json);
        //  const note= await response.json();
        //  setNotes(notes.concat(note))
       
      }

      // Delete Cake
      const DeleteCake=async(id)=>{
        const response = await fetch(`${host}/delete/${id}`, {
          method: 'DELETE', 
          headers: {
            'Content-Type': 'application/json',
          }
        }); 
         const json=await response.json();
         
           console.log(json);
           const newCake=cakes.filter((cake)=>{return cake._id!==id})
           setcakes(newCake);
           
      }

      //Update Cake
      const editcake=async (id,cakename,amount)=>{
    
        const response = await fetch(`${host}/update/${id}`, {
          method: 'PUT', 
          headers: {
            'Content-Type': 'application/json'
  
          },
             body: JSON.stringify({cakename,amount}) 
        }); 
         const json=response.json();
         console.log(json);
         let newCake=JSON.parse(JSON.stringify(cakes))
           for (let index = 0; index < newCake.length; index++) {
             const element = newCake[index];
             if(element._id===id)
             {
              newCake[index].cakename=cakename;
              newCake[index].amount=amount;
              break;
               
             }           
           }
           setcakes(newCake)
      }

      const getcustomer=async (from,to)=>{
        const response = await fetch(`${host}/fetcallcustomer`, {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
          },
           body: JSON.stringify({from,to}) 
        }); 
         const json=await response.json();

        //  setcakes(json);
        console.log("before",customers)
         setcustomer(json);
         console.log(json);
         console.log("After",customers)
         //console.log('date',date,'cutomer',customers)
         
      }
      const getcakeamount=async(id)=>{
        const response = await fetch(`${host}/getamount/${id}`, {
          method: 'GET', 
          headers: {
            'Content-Type': 'application/json',
          }
        }); 
         const json=await response.json();
         console.log('before amount',cakeamount);
         console.log(json.cakes.amount);      
         setcakeamount(json.cakes.amount);
         console.log('After amount',cakeamount);
      }
      // TO add Customer

      const AddCustomer=async(cakeid,customername,number,amountpaid)=>{
        const response = await fetch(`${host}/getperticularcake/${cakeid}`, {
          method: 'GET', 
          headers: {
            'Content-Type': 'application/json',
          }
        }); 
        const json=await response.json();
        console.log('thuis is',json.cakes.cakename);
        const cake=json.cakes.cakename;
        const response2 = await fetch(`${host}/addcustomer`, {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({cakeid,customername,cake,number,amountpaid}) 
        }); 
        const json2=await response2.json();
        return json2;
      }
    return (
         <CakeContext.Provider value={{cakes,AddCake,DeleteCake,editcake,getCakes,customers,getcustomer,cakeamount,setcakeamount,AddCustomer,getcakeamount}}>
             {props.children}
         </CakeContext.Provider>
        )
}

export default CakeState
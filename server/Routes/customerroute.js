const express = require('express');
const CUSTOMER=require('../model/Customer');
const router = express.Router();

router.post('/fetcallcustomer',async (req, res)=>{
   // const query = { date: "2022-01-18T16:00:50.513Z"};"2022-01-20T00:00:00.000Z"
   // const customer= await CUSTOMER.find(query);"2022-01-15T00:00:00.000Z"
   try{const {from,to}=req.body
  
   const customer= await CUSTOMER.find({
      "date" : {"$gte": new Date(from),
                "$lt": new Date(to)}
    })
   // const customer= await CUSTOMER.find({});customername: {$nin: ["Shreekrishna M powar"]}
   // ({name: {$nin: ["Amit", "Suman"]}}).pretty()blackforest
   res.json(customer);}
   catch(error){
      console.error(error.message);
      res.status(500).send("Internal server Error occured");
   }
   
})

router.post('/addcustomer',async(req,res)=>{
   console.log(req.body);
    try {
        const {cakeid,customername,cake,number,amountpaid}=req.body;
        const customer=new CUSTOMER({cakeid,customername,cake,number,amountpaid})
            const savedcustomer=await customer.save()
            res.json(savedcustomer);
    } catch (error) {
        console.error(error.message);
            res.status(500).send("Internal server Error occured");
        
    }
})

router.put('/updatecustomer/:id',async (req,res)=>{
    const {customername,cake,number,amountpaid}=req.body;
    try {
    const cunstomer={};
    if(customername){cunstomer.customername=customername};
    if(cake){cunstomer.cake=cake};
    if(number){cunstomer.number=number};
    if(amountpaid){cunstomer.amountpaid=amountpaid};
    // if(tag){newNote.tag=tag};
    //  find the note to be updated
    let CUSTOMERS=await CUSTOMER.findById(req.params.id);
    if(!CUSTOMERS){ return res.status(404).send("not found")} 
    console.log(CUSTOMERS);
    // if(note.user.toString()!==req.user.id){return res.status(404).send("not allowed")}
    const thiscustomer=await CUSTOMER.findByIdAndUpdate(req.params.id,{$set:cunstomer},{new:true})
    res.json({thiscustomer});
 } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server Error occured"); 
 }
 });

 router.delete('/deletecustomer/:id',async (req,res)=>{
    try {
      //  find the note to be deleted and delete it
      let customer=await CUSTOMER.findById(req.params.id);
      if(!customer){ return res.status(404).send("not found")} 
    //   if(note.user.toString()!==req.user.id){return res.status(404).send("not allowed")}
      const thiscustomer=await CUSTOMER.findByIdAndDelete(req.params.id)
      res.json({"success":"cake has been deleted",thiscustomer:thiscustomer});
     } catch (error) {
        console.error(error.message);
         res.status(500).send("Internal server Error occured"); 
      }
 })
 


module.exports = router
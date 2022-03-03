const express = require('express');
const CAKE=require('../model/Cake');
// const fetchuser=require('../middleware/fetchuser');
const router = express.Router();

router.get("/fetchallcakes",async (req, res)=>{
   const cake=await CAKE.find({});
   console.log(cake);
   res.json(cake)
})
//ROUT 2:add note
router.post("/addcake",async (req, res) => {
  
           try {
            const {cakename,amount}=req.body;
            let isexistcake = await CAKE.findOne({ cakename });
            if(isexistcake)
            {              
               return res.status(420).json({error:'Already Exist You Can Update'});
            }
            const cake=new CAKE({cakename,amount})
            const savedcake=await cake.save()
            res.json(savedcake);
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal server Error occured");
               
       }
    }  

);
router.put('/update/:id',async (req,res)=>{
   console.log('hello',req.body);
   const {cakename,amount}=req.body;
   try {
   const cake={};
   if(cakename){cake.cakename=cakename};
   if(amount){cake.amount=amount};
   // if(tag){newNote.tag=tag};
   //  find the note to be updated
   let cakes=await CAKE.findById(req.params.id);
   if(!cakes){ return res.status(404).send("not found")} 
   console.log(cakes);
   // if(note.user.toString()!==req.user.id){return res.status(404).send("not allowed")}
   const thiscake=await CAKE.findByIdAndUpdate(req.params.id,{$set:cake},{new:true})
   res.json({thiscake});
} catch (error) {
   console.error(error.message);
   res.status(500).send("Internal server Error occured"); 
}
});
router.delete('/delete/:id',async (req,res)=>{
   try {
     //  find the note to be deleted and delete it
     let cakes=await CAKE.findById(req.params.id);
     if(!cakes){ return res.status(404).send("not found")} 
   //   if(note.user.toString()!==req.user.id){return res.status(404).send("not allowed")}
     const thiscake=await CAKE.findByIdAndDelete(req.params.id)
     res.json({"success":"cake has been deleted",thiscake:thiscake});
    } catch (error) {
       console.error(error.message);
        res.status(500).send("Internal server Error occured"); 
     }
})

router.get('/getamount/:id',async(req,res)=>{
   try {
       let cakes=await CAKE.findById(req.params.id);
       res.json({cakes});
       } 
       catch (error) {
         res.status(500).send("Internal server Error occured"); 
   }
})
router.get('/getperticularcake/:id',async(req,res)=>{
   try {
       let cakes=await CAKE.findById(req.params.id);
       res.json({cakes});
       } 
       catch (error) {
         res.status(500).send("Internal server Error occured"); 
   }
})

module.exports = router
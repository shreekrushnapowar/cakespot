const JWT=require('jsonwebtoken')
const express = require('express');
const User=require('../model/Userschema');
const bcrypt=require('bcryptjs');
const router = express.Router();
require('../db/conn');

router.post('/createadmin',async (req, res)=>{
    const {username, password}=req.body;
    if(!username||!password)
     {
       return res.status(420).json({error:'fill all the fields'});
    }
    try
     {
      userExist= await User.findOne({username:username});
      if(userExist)
      {
          return res.status(420).json({error:'Already Exist'});
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
        console.log('secpass',secPass);
     
         const UserRegister = await User.create({username:username,password: secPass});
          console.log(UserRegister);
          res.send(UserRegister);
        
    } catch (error) {
        
    }
})
router.post('/signin',async (req, res)=>{
  
    const {username, password}=req.body;
    if(!username||!password)
     {
       return res.status(420).json({success:false,error:'fill all the fields'});
     }
    try
      {
        let user = await User.findOne({ username });
        if(user)
        {
          const passwordcompare= await bcrypt.compare(password,user.password);
          const token=await user.generateToken();
          console.log('token',token);
          
          if(passwordcompare)
          {
            success=true;
            res.send({token,success});
          }
          else{
            success=false;
            res.send({success},'not found password');
          }
        }
        else
        {    success=false;
            console.log('Not found');
            res.send({success},'not found');
        }    

      } 
      catch (error) {
        return res.status(420).json({error:'error nnot found'});
        
      }
})

module.exports = router;
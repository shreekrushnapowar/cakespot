const dotenv=require("dotenv");
var cors = require('cors')
const express=require('express');
const mongoose = require('mongoose');
const app=express();

app.use(cors())

const port=3300;

dotenv.config({path:'./config.env'});
require('./db/conn');
app.use(express.json());
// app.use(require('./Routes/user'));
app.use(require('./Routes/user'))
app.use(require('./Routes/cakeroute'))
app.use(require('./Routes/customerroute'))
app.get('/',(req,res)=>{
    res.send('hello world');
 })
app.listen(port,()=>{
    console.log('running at');
})
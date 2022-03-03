const mongoose = require('mongoose');
const DB=process.env.DATABASE;
mongoose.connect(DB).then(()=>{
    console.log('Connection successfull');
}).catch((err)=>{
    console.log(err,'No Connection');
})
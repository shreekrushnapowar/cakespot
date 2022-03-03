const mongoose=require('mongoose');
const {Schema}=mongoose;

const customerSchema=new Schema({
    cakeid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'cake' 
    },
    customername:{
        type:String,
        required:true
    },
    cake:{
        type:String,
        required:true
        },
   number:{
       type:Number,
       required:true
   },
   amountpaid:{
       type:Number,
       required:true
   },
   date:{
           type:Date,
           required:true,
           default:Date.now()
   }
   

})
module.exports = customer = mongoose.model("customer", customerSchema);
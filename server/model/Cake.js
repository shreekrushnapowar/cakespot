const mongoose=require('mongoose');
const {Schema}=mongoose;

const cakeSchema=new Schema({
    cakename:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
        }
})
module.exports = cake = mongoose.model("cake", cakeSchema);
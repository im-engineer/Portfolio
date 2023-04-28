import mongoose from 'mongoose';


import 'dotenv/config'
var mongoUrl = process.env.API_Url ;
console.log("🚀 ~ file: db.js:6 ~ mongoUrl:", mongoUrl)
const atIndex = mongoUrl.indexOf('@');
const credentials = mongoUrl.substring('mongodb+srv://'.length, atIndex).split(':');
const username = credentials[0];
const password = credentials[1];


var options= {
    user:username,
    pass:password
}
console.log("🚀 ~ file: db.js:11 ~ options:", options)
export const mongoconnection = async() => {
    try{
        await mongoose.connect(mongoUrl,options)
        console.log("Connect to DB");
    }
    catch(e){
        console.log(e);
        throw e
}
}
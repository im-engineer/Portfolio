import mongoose from 'mongoose';


import 'dotenv/config'
var mongoUrl = "mongodb://localhost:27017/siddhant";

console.log("🚀 ~ file: db.js:10 ~ mongoUrl:", mongoUrl)

export const mongoconnection = async() => {
    try{
        await mongoose.connect(mongoUrl);
        console.log("Connect to DB");
    }
    catch(e){
        console.log(e);
        throw e
}
}
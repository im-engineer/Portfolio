import mongoose from 'mongoose';

var config = require('./config/config');

var configdata = config.get(process.env.Node_env);
console.log("🚀 ~ file: db.js:6 ~ configdata:", configdata)
import 'dotenv/config'
var mongoUrl = process.env.API_Url;

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
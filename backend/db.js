import mongoose from 'mongoose';

var config = require('./config/config');

var configdata = config.get(process.env.Node_env).db;
import 'dotenv/config'
var port = process.env.PORT || configdata.port
var mongoUrl = process.env.API_Url;

console.log("🚀 ~ file: db.js:10 ~ mongoUrl:", mongoUrl)

var options= {
    user:configdata.userName,
    pass:configdata.password
}

export const mongoconnection = async() => {
    try{
        await mongoose.connect(mongoUrl,options);
        console.log("Connect to DB");
    }
    catch(e){
        console.log(e);
        throw e
}
}
import mongoose from 'mongoose';


import 'dotenv/config'
var mongoUrl = process.env.Node_env ;
console.log("🚀 ~ file: db.js:6 ~ mongoUrl:", mongoUrl)
// const atIndex = mongoUrl.indexOf('@');
// const credentials = mongoUrl.substring('mongodb+srv://'.length, atIndex).split(':');
// const username = credentials[0];
// const password = credentials[1];

var config = require('./config/config');
var configdata = config.get(process.env.Node_env).db;
var mongoUrl = `mongodb://${configdata.userName}:${configdata.password}@${configdata.host}:${configdata.port}/${configdata.databaseName}`;
var options= {
    user:configdata.userName,
    pass:configdata.password
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
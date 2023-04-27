import mongoose from 'mongoose';


import 'dotenv/config'
var mongoUrl = process.env.API_Url ;


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
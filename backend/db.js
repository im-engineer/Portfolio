import 'dotenv/config'

import {MongoClient} from 'mongodb';
const url = process.env.API_Url;
const database = process.env.Database

const client = new MongoClient(url);

export const getData = async() =>{
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection('contacts');
    let response = await collection.find({}).toArray();
    console.log(response)
}

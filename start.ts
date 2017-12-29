import * as dotenv from "dotenv";
import * as mongoose from 'mongoose';

dotenv.config({path:'variables.env'});
const dblink:string = String(process.env.DB_HOST || '');

// Launch Mongo connection
(<any>mongoose).Promise = global.Promise;
mongoose.connect(dblink, { useMongoClient: true },(err)=>{
    if(err) console.log(`WTF there was an error ${err.message}`);
    console.log("mongo is now connected to our systeme please request away :)");
});

import {application} from './src/server'
// The port the express app will listen on
const port: number = parseInt(process.env.PORT || '3000', 10);
// Serve the application at the given port
application.listen(port, () => {
    // Success callback
    console.log(`Listening at http://localhost:${port}/`);
});


import express, { response } from "express";
import {PORT,mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import {Book} from './models/bookModel.js';
import booksRoute from './Routes/booksRoute.js';
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors({
    origin:'http://localhost:3000',
    methods:['GET','PUT','POST','DELETE'],
    allowedHeaders:['content-type'],
}));

app.get('/',(request,response)=>{
    console.log(request);
    return response.status(234).send("Welcome");
});
//Routes
app.use('/books',booksRoute);



mongoose.connect(mongoDBURL)
    .then(()=>{
        console.log("DB connected!!!");
        app.listen(PORT ,()=>{
        console.log(`App is listening on port: ${PORT}`)
        });
    })
    .catch((error)=>{
        console.log(error)
    })


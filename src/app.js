import express from "express";
import bodyParser from "body-parser";
import {getAll, getById, create} from './controllers/todos-controller.js';
import { initializeDb } from "./dbfacade/dbfacade.js";

const app = express();
const port = 4000;
const jsonparser = bodyParser.json();

app.get("/todo/:id", getById);
app.get("/todo", getAll);
app.post("/todo", jsonparser, create)

app.listen(port, async () => {
    let retries = 5;
    while(retries){
        try {
            initializeDb();
            console.log(`Server running on port ${port}`);
            break;
        } catch(error){
            console.log(`retrying db connection, because of error:\n ${error}`);
            retries -= 1;
            await new Promise(res => setTimeout(res, 5000));
        }
    }
});
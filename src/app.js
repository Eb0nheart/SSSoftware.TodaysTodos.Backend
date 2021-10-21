import express from "express";
import bodyParser from "body-parser";
import {getAll, getById, create} from './controllers/todos-controller.js';
import { initializeDb } from "./dbfacade/dbfacade.js";

const app = express();
const port = 3000;
const jsonparser = bodyParser.json();

app.get("/todo/:id", getById);
app.get("/todo", getAll);
app.post("/todo", jsonparser, create)

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    initializeDb();
});
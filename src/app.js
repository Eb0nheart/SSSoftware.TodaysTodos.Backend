import express from "express";
import {getAll, getById,} from './controllers/todos-controller.js';

var app = express();
const port = 3000;

app.get("/todo/:id", getById);
app.get("/todo", getAll);


app.listen(port, () => {
 console.log(`Server running on port ${port}`);
});
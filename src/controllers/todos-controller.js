import { getTodo, getAllTodos } from "../dbfacade/dbfacade.js";

export const getById = function(req, res, next){
    res.status(200).json(getTodo(req.params.id));
}

export const getAll = function(req, res, next){
    res.status(200).json(getAllTodos());
}

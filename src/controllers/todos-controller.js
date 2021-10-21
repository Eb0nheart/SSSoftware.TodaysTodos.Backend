import { getTodo, getAllTodos, createTodo } from "../dbfacade/dbfacade.js";
import { StatusCodes } from 'http-status-codes';

export const getById = (req, res) => {
    getTodo(req.params.id)
        .then(todo => res.status(StatusCodes.OK).json(todo));
}

export const getAll = (req, res) => {
    getAllTodos()
        .then(todos => res.status(StatusCodes.OK).json(todos));
}

export const create = (req, res) => {
    createTodo(req.body)
        .then(newTodo => res.status(StatusCodes.CREATED).json(newTodo))
        .catch(error => res.status(StatusCodes.BAD_REQUEST).json(error.errors[0].message));
}

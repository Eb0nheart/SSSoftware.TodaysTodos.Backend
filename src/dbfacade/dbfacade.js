import { Sequelize } from "sequelize";

const sequelize = new Sequelize('postgres://postgres:admin@postgres:5432/TodaysTodos');

const Todo = sequelize.define('todo', {
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    description:{
        type: Sequelize.STRING,
        allowNull: true
    }
})

export const initializeDb = () => {
    sequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully, setting up db.');
            sequelize.sync();
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
            throw err;
        });
}

export const getTodo = async (id) => {
    return await Todo.findByPk(id);
};

export const getAllTodos = async () => {
    return await Todo.findAll();
}

export const createTodo = async (json) => {
    const newTodo = new Todo(json);
    await newTodo.save();
    return newTodo;
}

export const updateTodo = async (json) => {
    
}

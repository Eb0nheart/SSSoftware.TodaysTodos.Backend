const todos = 
[
    {id: 1, description: "Clean apartment"}, 
    {id: 2, description: "Take out trash"}, 
    {id: 3, description: "Code app"}, 
    {id: 4, description: "Buy groceries"}, 
    {id: 5, description: "Cook dinner"}, 
    {id: 6, description: "Watch movie"}
];

export const getTodo = (id) => {
    return todos.find(t => t.id ==id); 
};

export const getAllTodos = () => {
    return todos;
}
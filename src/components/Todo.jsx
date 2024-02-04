import React from "react";

const Todo = ({todo , removeTodo , completeTodo}) => {
    return (
        <div className="todo" 
        style={{textDecoration: todo.done ? "line-through" : ""}}>
            <div className="content">
                <p>{todo.title}</p>
                <p className="category">({todo.category})</p>
            </div>
            <div>
                <button className="complete" onClick={() => completeTodo(todo.id)}>
                    Concluir tarefa
                </button>
                <button className="remove" onClick={() => removeTodo(todo.id)}>
                    x
                </button>
            </div>
        </div>);
}

export default Todo;
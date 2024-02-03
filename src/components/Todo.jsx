import React from "react";

const Todo = ({todo , removeTodo}) => {
    return (
        <div className="todo" key={todo.id}>
            <div className="content">
                <p>{todo.title}</p>
                <p className="category">({todo.category})</p>
            </div>
            <div className="actions">
                <button className="complete">Concluir tarefa</button>
                <button className="remove" onClick={() => removeTodo}>x</button>
            </div>
        </div>);
}

export default Todo;
import { useState } from 'react'
import './App.css'
import Todo from "./components/Todo.jsx";
import TodoForm from "./components/TodoForm.jsx";

function App() {

    const [todos, setTodos] = useState([
        { id:1,
          title: 'Criar funcionalidade x no sistema',
            category: 'Trabalho',
          done: false,
        },
        { id:2,
          title: 'Ir ao supermercado',
            category: 'Pessoal',
          done: false,
        },
        { id:3,
          title: 'Estudarr React',
            category: 'Estudo',
          done: false,
        },

    ]);

    const addTodo = (text, category) => {
        const newTodos = [...todos,
           {
            id: Math.floor(Math.random() * 10000),
            title: text,
            category,
            done: false,
          },
        ];
        setTodos(newTodos);
    };

    const removeTodo = (id) => {
        const newTodos = [...todos];
        const filteredTodos = newTodos.filter((todo) => 
          todo.id !== id ? todo : null
        );
        setTodos(filteredTodos);
    };

    return (
        <div className="app">
            <h1>Lista de tarefas</h1>
            <div className="todo-list">
                {todos.map((todo) => (
                  <Todo key={todo.id} todo={todo} removeTodo={removeTodo}/>
                ))}
            </div>
            <TodoForm addTodo={addTodo} />
        </div>
    );
}

export default App


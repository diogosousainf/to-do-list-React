import { useState } from 'react'

import Todo from "./components/Todo.jsx";
import TodoForm from "./components/TodoForm.jsx";
import Search from "./components/Search.jsx";
import Filter from "./components/Filter.jsx";

import './App.css'


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

    const [search, setSearch] = useState("");

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

    const completeTodo = (id) => {
        const newTodos = [...todos];
        newTodos.map((todo) =>
          todo.id === id ? (todo.done = !todo.done) : todo
        );
        setTodos(newTodos);
    }

    return (
        <div className="app">
            <h1>Lista de tarefas</h1>
            <Search search={search} setSearch={setSearch}/>  
            <Filter />
            <div className="todo-list">
                {todos
                  .filter((todo) =>
                  todo.title.toLowerCase().includes(search.toLowerCase()))
                .map((todo) => (
                  <Todo
                   key={todo.id} 
                  todo={todo} 
                  removeTodo={removeTodo}
                   completeTodo={completeTodo}
                   />
                ))}
            </div>
            <TodoForm addTodo={addTodo} />
        </div>
    );
}

export default App


import { useState } from 'react'

import Todo from "./components/Todo.jsx";
import TodoForm from "./components/TodoForm.jsx";
import Search from "./components/Search.jsx";
import Filter from "./components/Filter.jsx";

import './App.css'


function App() {

    const [todos, setTodos] = useState([
        { id:1,
          title: 'Ir ao banco',
            category: 'Pessoal',
          done: false,
        },
        { id:2,
          title: 'Ir trabalhar',
            category: 'Trabalho',
          done: false,
        },
        { id:3,
          title: 'Estudar Laravel',
            category: 'Estudo',
          done: false,
        },

    ]);

    const [search, setSearch] = useState("");

    const [filter, setFilter] = useState("All");
    const [order, setSort] = useState("Asc");

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
            <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
            <div className="todo-list">
                {todos
                .filter((todo) => 
                  filter ==="All" 
                  ? todo : filter === "Completed"
                   ? todo.done : 
                   !todo.done)
                .filter((todo) =>
                  todo.title.toLowerCase().includes(search.toLowerCase())
                  )
                
                .sort((a, b) => 
                  order === "Asc" 
                  ? a.title.localeCompare(b.title) 
                  : b.title.localeCompare(a.title)
                  )
                  
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


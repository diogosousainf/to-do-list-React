import { useState } from "react";



const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value || !category) return; 
        addTodo (value, category);
        setValue("");
        setCategory("");
    }
    return <div>
        <h2>Adicionar Tarefa</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Digite o titulo" onChange={(e) => setValue(e.target.value)} value={value} />
            <select onChange={(e) => setCategory(e.target.value)} value={category}>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudo">Estudo</option>
            </select>
            <button type="submit">Adicionar</button>

        </form>
    </div>;
};


export default TodoForm;
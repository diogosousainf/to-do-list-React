
const Filter = ({search, setSearch}) => {
    return (
        <div className="filter">
            <h2>Filtrar:</h2>
           <div className="filter-options">
            <div>
                <p>Status:</p>
                <select>
                    <option value="All">Todos</option>
                    <option value="Completed">Concluídos</option>
                    <option value="Incomplete">Não concluídos</option>
                </select>
            </div>
            <div>
                <p>Ordem Alfabetica</p>
                <button>Asc</button>
                <button>Desc</button>
            </div>
           </div> 
        </div>
    );
}

export default Filter;
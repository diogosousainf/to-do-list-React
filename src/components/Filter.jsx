
const Filter = ({filter, setFilter, setSort}) => {
    return (
        <div className="filter">
            <h2>Filtrar:</h2>
           <div className="filter-options">
            <div>
                <p>Status:</p>
                <select value ={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="All">Todos</option>
                    <option value="Completed">Concluídos</option>
                    <option value="Incomplete">Não concluídos</option>
                </select>
            </div>
            <div>
                {/*<p>Ordem Alfabetica</p>
                <button onClick={()=> setSort("Asc")}>Asc</button>
                <button onClick={()=> setSort("Asc")}>Desc</button>*/}
            </div>
           </div> 
        </div>
    );
}

export default Filter;
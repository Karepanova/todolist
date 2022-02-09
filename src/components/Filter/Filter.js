import './Filter.css';

function Filter({setDoneFilter}) {
 return (
   <form className="filter">
      <select className="filter-control" onChange={(e) => setDoneFilter(e.target.value)}>
       <option className="filter-all" value="0">Все</option>
       <option className="filter-done" value="1">Выполненные</option>
       <option className="filter-not-done" value="2">Не выполненные</option>
      </select>
   </form>
 );
}

export default Filter;
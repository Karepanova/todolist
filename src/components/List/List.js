import './List.css';

function List({list, delTodo, doneTodo}) {

 return (
   <ul className="list">
    {list.map((todo, index) => (
     <li className={"todolist-item" + (todo.done ? " todolist-item__done" : "" )} key={index}>
      <button type="button" className="todolist-item__done-false" onClick={() => doneTodo(index)}>&#10004;</button>
      <span className="todolist-item__text">{todo.name}</span>
      <button type="button" className="todolist-item__del" onClick={() => delTodo(index)}> </button>
     </li>
    ))
    }
   </ul>
 )
}

export default List;
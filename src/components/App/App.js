import './App.css';
import Form from "../Form/Form";
import List from "../List/List";
import { useState, useEffect } from "react";
import Filter from "../Filter/Filter";

function App() {
 const [list, setList] = useState([]);
 const [filter, setFilter] = useState(0);
 const [filterList, setFilterList] = useState([]);

 function addTodo(value) {
  setList([...list, value]);
 }

 function delTodo(todoIndex) {
  const temp = [...list];
  const newTodos = temp.filter((_, index) => index !== todoIndex);

  setList(newTodos);
 }

 function doneTodo(todoIndex) {
  const temp = [...list];
  temp[todoIndex].done = !temp[todoIndex].done;
  setList(temp);
 }

 function setDoneFilter(value) {
  setFilter(Number(value));
 }

 useEffect(() => {
  const temp = [...list];

  console.log("filter", filter);
  if (filter === 0) {
   setFilterList(temp);
  } else if (filter === 1) {
   const doneList = temp.filter((i) => i.done);
   setFilterList(doneList);
  } else if (filter === 2) {
   const notDoneList = temp.filter((i) => !i.done);
   setFilterList(notDoneList);
  }
 }, [filter, list]);

 return (
  <div className="app">
   <Form addTodo={addTodo}/>
   <Filter setDoneFilter={setDoneFilter}/>
   <List list={filterList} delTodo={delTodo} doneTodo={doneTodo}/>
  </div>
 );
}

export default App;

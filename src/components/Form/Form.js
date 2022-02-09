import './Form.css';
import { useState } from "react";

function Form({ addTodo }) {
 const [value, setValue] = useState('');

 function handleChange(e) {
  setValue(e.target.value);
 }

 function addItem() {
  const objList = {
   name: value,
   done: false,
  };
  addTodo(objList);
  setValue('');
 }

 return (
  <section className="form">
   <h2 className="title">To-do list</h2>
   <form className="todo-form">
    <input
     type="text"
     name="text"
     className="todo-form_input"
     value={value}
     onChange={handleChange}
     placeholder="..."
    />
    <button type="button" className="todo-form_submit" onClick={addItem}>Сохранить</button>
   </form>
  </section>
 );
}

export default Form;
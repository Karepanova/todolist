import './Constructor.css';

function Constructor() {
  return (
    <section className="constructor">
      <h1 className="title">To-do list</h1>
      <form className="todo-form">
        <input type="text" name="text" className="todo-form_input"/>
        <button type="submit" className="todo-form_submit">Сохранить</button>
      </form>
    </section>
  );
}

export default Constructor;
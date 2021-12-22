import { useEffect, useState } from 'react';

function Todo() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const typedTodo = (event) => {
    setTodo(event.target.value);
    console.log(event.target.value);
  };

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([todo, ...todos]);
    console.log(`Add : ${todo}`);

    setTodo('');
  };

  const deleteTodo = () => {
    console.log('Delete');
  };

  let container = JSON.parse(localStorage.getItem('todos'));
  useEffect(
    () => localStorage.setItem('todos', JSON.stringify(todos)),
    [todos]
  );

  return (
    <div>
      <div>todos : {todos}</div>
      <div>container : {container}</div>
      <h3>To do list</h3>
      <form onSubmit={addTodo}>
        <input
          value={todo}
          onChange={typedTodo}
          type="text"
          placeholder="What to do?"
        />
        <button>ADD</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo}>
            {todo}
            <button onClick={deleteTodo}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Todo;

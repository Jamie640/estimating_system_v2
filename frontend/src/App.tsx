import { useEffect, useState } from 'react';
import MainLayout from './layouts/MainLayout';

type Todo = {
  id: number;
  title: string;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const fetchTodos = () => {
    fetch('http://localhost:3000/todos')
      .then(res => res.json())
      .then(setTodos)
      .catch(console.error);
  };

  const addTodo = () => {
    if (!newTodo.trim()) return;

    fetch('http://localhost:3000/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: newTodo })
    })
      .then(() => {
        setNewTodo('');
        fetchTodos();
      })
      .catch(console.error);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <MainLayout>
      <div className="container">
        <h1 className="mb-4">Todos</h1>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            value={newTodo}
            onChange={e => setNewTodo(e.target.value)}
            placeholder="Enter a new todo"
          />
          <button className="btn btn-primary" onClick={addTodo}>
            Add Todo
          </button>
        </div>
        <ul className="list-group">
          {todos.map(todo => (
            <li key={todo.id} className="list-group-item">
              {todo.title}
            </li>
          ))}
        </ul>
      </div>
    </MainLayout>
  );
}

export default App;

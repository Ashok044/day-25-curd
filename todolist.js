import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('both');

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const editTodo = (updatedTodo) => {
    setTodos(todos.map(todo => todo.id === updatedTodo.id ? updatedTodo : todo));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleStatus = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, status: todo.status === 'completed' ? 'not completed' : 'completed' } : todo
    ));
  };

  const filteredTodos = todos.filter(todo => 
    filter === 'both' || todo.status === filter
  );

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <div>
        <button onClick={() => setFilter('both')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('not completed')}>Not Completed</button>
      </div>
      <div>
        {filteredTodos.map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
            editTodo={editTodo}
            deleteTodo={deleteTodo}
            toggleStatus={toggleStatus}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;

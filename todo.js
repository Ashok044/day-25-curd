import React from 'react';

const Todo = ({ todo, editTodo, deleteTodo, toggleStatus }) => {
  return (
    <div className="todo-card">
      <h2>{todo.task}</h2>
      <p>{todo.description}</p>
      <button onClick={() => toggleStatus(todo.id)}>
        {todo.status}
      </button>
      <button onClick={() => editTodo(todo)}>Edit</button>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
};

export default Todo;

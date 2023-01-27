import React from 'react';
import { useSelector } from 'react-redux';
import store from '../../store';
import { toggleTodo } from '../../store/reducers';

const TodoList = () => {
  const todos = useSelector(state => state.todos);

  const handleToggle = id => {
    store.dispatch(toggleTodo(id));
  };

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggle(todo.id)}
            />
            {todo.text}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
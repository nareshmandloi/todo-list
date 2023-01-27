import React, { useState } from 'react';
import store from '../../store';
import { addTodo } from '../../store/reducers/index';

const AddTodo = () => {
  const [text, setText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    store.dispatch(addTodo(text));
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Enter a todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
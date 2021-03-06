/* eslint-disable no-undef */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaPlusSquare } from 'react-icons/fa';

const InputTodo = ({ addTodoProps }) => {
  const [inputText, setInputText] = useState({
    title: '',
    message: '',
  });

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.title.trim()) {
      addTodoProps(inputText.title);
      setInputText({
        title: '',
      });
    } else {
      setInputText({ message: 'Please write something' });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add todo..."
          value={inputText.title}
          name="title"
          onChange={onChange}
        />
        <button type="submit" className="input-submit">
          <FaPlusSquare
            style={{ color: 'darkcryan', fontSize: '20px', marginTop: '2px' }}
          />
        </button>
      </form>
      <p className="alert-message">{inputText.message}</p>
    </div>
  );
};

InputTodo.propTypes = {
  addTodoProps: PropTypes.func.isRequired,
};

export default InputTodo;

import React from "react";

import { Todo } from "domain";

export const Input: React.SFC<{
  value: string;
  handleChange: () => void;
  onKeyPress: () => void;
}> = ({ value, handleChange, onKeyPress }) => (
  <div className="input-wrapper">
    <input
      className="todo-input"
      placeholder="What are you going to do?"
      autoFocus={true}
      value={value}
      onChange={handleChange}
      onKeyPress={onKeyPress}
    />
  </div>
);

export const Item: React.SFC<{
  todo: Todo;
  onFinish: (id: number) => void;
}> = ({ todo, onFinish }) => (
  <li className="list-group-item todo-item">
    {todo.title}
    <span onClick={() => onFinish(todo.id)}>x</span>
  </li>
);

export const ClearButton: React.SFC<{
  onClick: (event: any) => void;
}> = ({ onClick }) => (
  <button type="button" className="btn btn-link" onClick={onClick}>
    Clear todos
  </button>
);

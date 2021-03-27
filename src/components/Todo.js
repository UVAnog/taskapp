import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { RiCheckboxLine } from "react-icons/ri";
import { RiEditBoxLine } from "react-icons/ri";
import { RiDeleteBinLine } from "react-icons/ri";
const Todo = ({
  todos,
  completeTodo,
  removeTodo,
  clickHandler,
  updateTodo,
}) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div className="icons">
        <RiEditBoxLine
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        />
      </div>

      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>

      <div className="icons">
        <RiCheckboxLine
          onClick={() => completeTodo(todo.id)}
          className="update-icon"
        />
        <RiDeleteBinLine
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
      </div>
    </div>
  ));
};

export default Todo;

import React from "react";

// import styles
import style from "../assets/styles/Task.module.css";

function Task({ todo, toggleComplete, removeTodo }) {
  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }

  function handleRemoveClick() {
    removeTodo(todo.id);
  }

  return (
    <body>
      <div className={`input-group mb-2 ${style.task}`}>
        {/* checkbox for completed task - start */}
        <div className="input-group-text">
          <input
            className={`form-check-input`}
            type={`checkbox`}
            checked={todo.completed}
            onClick={handleCheckboxClick}
          />
        </div>
        {/* checkbox for completed task - end */}

        {/* task - start */}
        <span
          className={`input-group-text col`}
          style={{
            textDecoration: todo.completed ? "line-through" : null,
          }}
        >
          {todo.task}
        </span>

        {/* task - end */}

        {/* delete button - start */}
        <button
          className={`btn  btn-danger`}
          type={`button`}
          onClick={handleRemoveClick}
        >
          Delete
        </button>
        {/* delete button - end */}
      </div>
    </body>
  );
}

export default Task;

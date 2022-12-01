import React from "react";

function Task({ todo, toggleComplete, removeTodo }) {
  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }

  function handleRemoveClick() {
    removeTodo(todo.id);
  }

  return (
    <body>
      <div className={`input-group mb-2`}>
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

        {/* edit button - start */}
        <button className={`btn btn-warning`}>
          <i class="bi bi-pencil-square"></i>
        </button>
        {/* edit button - end */}

        {/* delete button - start */}
        <button
          className={`btn btn-danger`}
          type={`button`}
          onClick={handleRemoveClick}
        >
          <i class="bi bi-trash3"></i>
        </button>
        {/* delete button - end */}
      </div>
    </body>
  );
}

export default Task;

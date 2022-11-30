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
      <div className={`${style.task}`}>
        {/* checkbox for completed task - start */}
        <input
          type={`checkbox`}
          checked={todo.completed}
          onClick={handleCheckboxClick}
        />
        {/* checkbox for completed task - end */}

        {/* task - start */}
        <p
          style={{
            textDecoration: todo.completed ? "line-through" : null,
          }}
        >
          {todo.task}
        </p>
        {/* task - end */}

        {/* delete button - start */}
        <button onClick={handleRemoveClick}>X</button>
        {/* delete button - end */}
      </div>
    </body>
  );
}

export default Task;

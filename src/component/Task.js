import React from "react";

// import styles
import style from "../assets/styles/Task.module.css";

function Task({ task, index, completeTask, removeTask }) {
  return (
    <body>
      <div
        className={`${style.task}`}
        style={{ textDecoration: task.completed ? "line-through" : "" }}
      >
        {task.title}

        <button style={{ background: "red" }} onClick={() => removeTask(index)}>
          x
        </button>
        <button onClick={() => completeTask(index)}>Complete</button>
      </div>
    </body>
  );
}

export default Task;

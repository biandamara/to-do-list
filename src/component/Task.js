import React from "react";

function Task(task, handleCompleted, handleDelete) {
  // function handle checkbox if the task is complete
  function checkboxButton() {
    handleCompleted(task.id);
  }

  // function handle delete if the task doesn't complete
  function deleteButton() {
    handleDelete(task.id);
  }

  return (
    <body>
      <ul>
        {/* checkbox button - start */}
        <li>
          <input
            type={`checkbox`}
            checked={task.completed}
            onClick={checkboxButton}
          ></input>
        </li>
        {/* checkbox button - end */}

        {/* tasks - start */}
        <li>
          <p
            style={{
              textDecoration: task.completed ? "line-through" : null,
            }}
          >
            {task.task}
          </p>
          {/* tasks - end */}
        </li>

        {/* delete button - start */}
        <li>
          <button onClick={deleteButton}>X</button>
        </li>
        {/* delete button - end */}
      </ul>
    </body>
  );
}

export default Task;

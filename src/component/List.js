import React from "react";

// import components
import Task from "./Task";

function List({ tasks, handleComplete, handleDelete }) {
  return (
    <body>
      {/* {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          handleComplete={handleComplete}
          handleDelete={handleDelete}
        />
      ))} */}
    </body>
  );
}

export default List;

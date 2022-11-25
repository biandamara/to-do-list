import React from "react";

// import module
import List from "@mui/material/List";

// import components
import Task from "./Task";

function ListTask({ tasks, handleCompleted, handleDelete }) {
  return (
    <List>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          handleCompleted={handleCompleted}
          handleDelete={handleDelete}
        />
      ))}
    </List>
  );
}

export default ListTask;

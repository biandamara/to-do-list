import React from "react";

// import module
import { ListItem, Checkbox, Typography, IconButton } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";

function Task({ task, handleCompleted, handleDelete }) {
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
      <ListItem>
        {/* checkbox button - start */}
        <Checkbox checked={task.completed} onClick={checkboxButton} />
        {/* checkbox button - end */}

        {/* tasks - start */}
        <Typography
          style={{
            textDecoration: task.completed ? "line-through" : null,
          }}
        >
          {task.task}
        </Typography>
        {/* tasks - end */}

        {/* delete button - start */}
        <IconButton onClick={deleteButton}>{/* <CloseIcon /> */}X</IconButton>
        {/* delete button - end */}
      </ListItem>
    </body>
  );
}

export default Task;

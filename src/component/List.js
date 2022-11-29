import React from "react";

// import components
import Task from "../component/Task";

function List({ tasks }) {
  return (
    <body>
      <div className="tasks">
        {tasks.map((task, index) => (
          <Task task={task} index={index} key={index} />
        ))}
      </div>
    </body>
  );
}

export default List;

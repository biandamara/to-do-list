import React from "react";

// import components
import Task from "../components/Task";

function List({ todos, removeTodo, toggleComplete }) {
  return (
    <body>
      {/* tasks - start */}
      <div>
        {todos.map((todo) => (
          <Task
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            toggleComplete={toggleComplete}
          />
        ))}
      </div>
      {/* tasks - end */}
    </body>
  );
}

export default List;

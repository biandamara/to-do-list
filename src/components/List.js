import React from "react";

// import components
import Task from "../components/Task";

function List({ todos, removeTodo, toggleComplete }) {
  return (
    <body>
      {" "}
      {todos.map((todo) => (
        <Task
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          toggleComplete={toggleComplete}
        />
      ))}
    </body>
  );
}

export default List;

import React from "react";

// import components
import Task from "../components/Task";

function List({ todos, removeTodo, toggleComplete }) {
  return (
    <>
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
    </>
  );
}

export default List;

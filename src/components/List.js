import React from "react";

// import components
import Task from "../components/Task";

// import style
import style from "../assets/styles/List.module.css";

function List({ todos, removeTodo, toggleComplete }) {
  return (
    <body>
      <div className={`${style.list}`}>
        {/* numbers - start */}
        {/* <div className={`col`}>
          <div className={`${style.numbers}`}>
            {todos.map((todo, i) => {
              return <>{i + 1}. </>;
            })}
          </div>
        </div> */}
        {/* numbers - end */}

        {/* tasks - start */}
        <div className={`${style.todos}`}>
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
      </div>
    </body>
  );
}

export default List;

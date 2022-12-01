import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Form({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  // function submit task
  function handleSubmit(e) {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuidv4() });
      setTodo({ ...todo, task: "" });
    }
  }

  // function new task
  function handleTaskInputChange(e) {
    setTodo({ ...todo, task: e.target.value });
  }

  return (
    <body>
      <div>
        {/* from for new task - start */}
        <form className={`input-group`} onSubmit={handleSubmit}>
          {/* input text - start */}
          <input
            className={`form-control`}
            name={`task`}
            type={`text`}
            value={todo.task}
            label={`Task`}
            placeholder={`Add task`}
            onChange={handleTaskInputChange}
          />
          {/* input text - end */}

          {/* submit button - start */}
          <button className={`btn btn-primary`} type={`submit`}>
            <i class="bi bi-plus-square"></i>
          </button>
          {/* submit button - end */}
        </form>
        {/* from for new task - end */}
      </div>
    </body>
  );
}

export default Form;

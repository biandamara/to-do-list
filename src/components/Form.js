import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// import style
import style from "../assets/styles/Form.module.css";

function Form({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  // function submit
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
      <div className={`${style.form}`}>
        {/* from for new task - start */}
        <form className={`input-group`} onSubmit={handleSubmit}>
          {/* input text - start */}
          <input
            className={`form-control`}
            label="Task"
            type="text"
            name="task"
            value={todo.task}
            placeholder={`Add task`}
            onChange={handleTaskInputChange}
          />
          {/* input text - end */}

          {/* submit button - start */}
          {/* <button className={`btn btn-primary`} type={`submit`}>
            Submit
          </button> */}
          {/* submit button - end */}
        </form>
        {/* from for new task - end */}
      </div>
    </body>
  );
}

export default Form;

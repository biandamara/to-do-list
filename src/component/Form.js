import React, { useState } from "react";

// import package
import { v4 as uuidv4 } from "uuid";

function Form(addTask) {
  const [task, setTask] = useState({
    id: "",
    task: "",
    completed: false,
  });

  // function handle input task
  function handleTaskInput(e) {
    // e.target.value contains new input from onChange
    // event for input elements
    setTask({
      ...task,
      task: e.target.value,
    });
  }

  // function handle submit task
  function handleSubmitTask(e) {
    // prevents browser refresh
    // trim() gets rid of string whitespace
    e.preventDefault();
    if (task.task.trim()) {
      addTask({ ...task, id: uuidv4() });
      setTask({ ...task, task: "" });
    }
  }

  return (
    <body>
      {/* form - start */}
      <form onSubmit={handleSubmitTask}>
        {/* input text - start */}
        <input
          name={`task`}
          type={`text`}
          value={task.task}
          onChange={handleTaskInput}
        ></input>
        {/* input text - end */}

        {/* submit button - start */}
        <button type="submit">Submit</button>
        {/* submit button - end */}
      </form>
      {/* form - end */}
    </body>
  );
}

export default Form;

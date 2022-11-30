import React, { useState } from "react";

// import styles
import style from "../assets/styles/Home.module.css";

function Home() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);

  // add tasks
  function addTask(task) {
    setTasks(task);
  }

  // update tasks
  function updateTasl(task) {
    setTasks(task);
  }

  // delete task
  function deleteTask(task) {
    setTasks(task);
  }

  // clear tasks
  function clearTasks() {
    setTasks("");
  }

  return (
    <body>
      {/* header - start */}
      <h1>To-do List</h1>
      {/* header - end */}

      {/* remaining tasks - start */}
      <div></div>
      {/* remaining tasks - end */}

      {/* form task - start */}
      <div>
        <form>
          <input
            value={`text`}
            placeholder={`Entar task`}
            onChange={(e) => setText(e.target.value)}
          ></input>
        </form>
      </div>
      {/* form task - end */}

      {/* list tasks - start */}
      <div>
        {tasks.map((data, i) => {
          return (
            <p>
              {i + 1}. {data}
            </p>
          );
        })}
      </div>
      {/* list tasks - end */}

      {/* clear all tasks button - start */}
      <button>Clear</button>
      {/* clear all tasks button - end */}
    </body>
  );
}

export default Home;

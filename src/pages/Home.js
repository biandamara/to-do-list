import React, { useEffect, useState } from "react";

// import components
import Form from "../component/Form";
import List from "../component/List";

// import file css
import style from "../assets/styles/Home.module.css";

function Home() {
  const [tasks, setTasks] = useState([]);

  // local storage
  useEffect(() => {
    // fires when the app component mounts to the DOM
    if (localStorage.getItem("To-do List")) {
      const storedList = JSON.parse(localStorage.getItem("To-do List"));
      setTasks(storedList);
    }
  }, []);

  useEffect(() => {
    // fires when the tasks array gets updated
    localStorage.setItem("To-do List", JSON.stringify(tasks));
  }, [tasks]);

  // function add task

  // function update tasks

  // function completed task

  // function delete tasks

  // function clear tasks

  return (
    <body className={`${style.body}`}>
      {/* card - start */}
      <div className={`${style.card}`}>
        {/* title - start */}
        <h1>To-do List</h1>
        {/* title - end */}

        {/* badge - start */}
        <div>
          You have
          {!tasks.length
            ? ` no tasks`
            : tasks.length === 1
            ? ` 1 task`
            : tasks.length > 1
            ? ` ${tasks.length} tasks`
            : null}
        </div>
        {/* badge - end */}

        {/* form - start */}
        <Form />
        {/* form - end */}

        {/* list - start */}
        <List />
        {/* list - end */}

        {/* clear task button - start */}
        <button>Clear</button>
        {/* clear task button - end */}
      </div>
      {/* card - end */}
    </body>
  );
}

export default Home;

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
  function addTask(task) {
    setTasks([...tasks, task]);
  }

  // function completed task
  function handleCompleted(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === task.id) {
          return { ...task, completed: true };
        }
        return task;
      })
    );
  }

  // function delete tasks
  function handleDelete(id) {
    setTasks(
      tasks.filter((task) => {
        return task.id !== task.id;
      })
    );
  }

  // function clear tasks
  function handleClear() {
    setTasks([]);
    localStorage.removeItem("To-do List", JSON.stringify([]));
  }

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
        <Form addTask={addTask} />
        {/* form - end */}

        {/* list - start */}
        <List
          taks={tasks}
          handleCompleted={handleCompleted}
          handleDelete={handleDelete}
        />
        {/* list - end */}

        {/* clear tasks button - start */}
        <button onClick={() => handleClear()}>Clear</button>
        {/* clear tasks button - end */}
      </div>
      {/* card - end */}
    </body>
  );
}

export default Home;

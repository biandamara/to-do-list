import React, {
  useState,
  // useEffect
} from "react";

// import components
import Form from "../component/Form";
import List from "../component/List";

// import styles
import style from "../assets/styles/Home.module.css";

function Home() {
  const [tasks, setTasks] = useState([]);
  // const [tasksRemaining, setTasksRemaining] = useState(0);

  // tasks remianing
  // useEffect(() => {
  //   setTasksRemaining(tasks.filter((task) => !task.completed).length);
  // });

  // add tasks
  const addTask = (title) => {
    const newTasks = [...tasks, { title, completed: false }];
    setTasks(newTasks);
  };

  // remove tasks
  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  // completed tasks
  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = true;
    setTasks(newTasks);
  };

  return (
    <body>
      {/* header - start */}
      <h1>To-do List</h1>
      {/* header - end */}

      {/* remaining tasks - start */}
      {/* <div className={`${style.header}`}>Pending tasks ({tasksRemaining})</div> */}
      {/* remaining tasks - end */}

      {/* form task - start */}
      <Form addTask={addTask} />
      {/* form task - end */}

      {/* list tasks - start */}
      <div className={`${style.tasks}`}>
        {tasks.map((task, index) => (
          <List
            task={task}
            index={index}
            completeTask={completeTask}
            removeTask={removeTask}
            key={index}
          />
        ))}
      </div>
      {/* list tasks - end */}
    </body>
  );
}

export default Home;

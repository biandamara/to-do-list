import React, { useEffect, useState } from "react";
import Form from "../components/Form";
import List from "../components/List";

// import styles
import style from "../assets/styles/Home.module.css";

function Home() {
  const [todos, setTodos] = useState([]);
  const [allTodos, setAllTodos] = useState(0);
  const [todosCompeleted, setTodosCompeleted] = useState(0);
  const [todosRemaining, setTodosRemaining] = useState(0);

  // save to local storage
  useEffect(() => {
    const storageTodos = JSON.parse(
      localStorage.getItem("to-do-list-localStorage")
    );
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("to-do-list-localStorage", JSON.stringify(todos));
  }, [todos]);

  // all tasks
  useEffect(
    () => setAllTodos(todos.filter((todo) => todo).length),
    [todos, allTodos]
  );

  // tasks completed
  useEffect(
    () => setTodosCompeleted(todos.filter((todo) => todo.completed).length),
    [todos, todosCompeleted]
  );

  // tasks remaining
  useEffect(
    () => setTodosRemaining(todos.filter((todo) => !todo.completed).length),
    [todos, todosRemaining]
  );

  // function add task
  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  // function completed tasks
  function toggleComplete(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  }

  // function update tasks

  // function delete tasks
  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <body className={`${style.body}`}>
      <div className={`container`}>
        {/* card - start */}
        <div className={`container ${style.outter}`}>
          <div className={`card ${style.card}`}>
            <div className="card-body mx-3">
              {/* header - start */}
              <div className={`text-center ${style.header}`}>
                <img src="../../public/icon.png" alt=""></img>
                <h1>To-do List</h1>
              </div>
              {/* header - end */}

              {/* status - start */}
              <div className={`row g-2 my-4 ${style.status}`}>
                <div className="col-lg-4 col-sm-6">
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <i class="col card-text bi bi-inbox-fill text-secondary"></i>
                        <p className="col card-text text-end">{allTodos}</p>
                      </div>
                      <br />
                      <h2 className="card-title">Tasks</h2>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <i class="col card-text bi bi-check-circle-fill text-success"></i>
                        <p className="col card-text text-end">
                          {todosCompeleted}
                        </p>
                      </div>
                      <br />
                      <h2 className="card-title">Completed</h2>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <i class="col card-text bi bi-clock-fill text-warning"></i>
                        <p className="col card-text text-end">
                          {todosRemaining}
                        </p>
                      </div>
                      <br />
                      <h2 className="card-title">Remaining</h2>
                    </div>
                  </div>
                </div>
              </div>
              {/* status - end */}

              {/* form - start */}
              <div className={`my-4`}>
                <Form addTodo={addTodo} />
              </div>
              {/* form - end */}

              {/* to-do list - start */}
              <div className={`my-4`}>
                <List
                  todos={todos}
                  removeTodo={removeTodo}
                  toggleComplete={toggleComplete}
                />
              </div>
              {/* to-do list - end */}
            </div>
            {/* card - end */}
          </div>
        </div>
      </div>
    </body>
  );
}

export default Home;

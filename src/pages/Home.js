import React, { useEffect, useState } from "react";
import Form from "../components/Form";
import List from "../components/List";

// import styles
import style from "../assets/styles/Home.module.css";

function Home() {
  const [todos, setTodos] = useState([]);
  const [todosRemaining, setTodoRemaining] = useState(0);

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

  // tasks remaining
  useEffect(
    () => setTodoRemaining(todos.filter((todo) => !todo.completed).length),
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
        <div className={`container`}>
          <div className={`card ${style.card}`}>
            <div className="card-body mx-3">
              {/* header - start */}
              <div className={`text-center ${style.header}`}>
                <img src="../../public/icon.png" alt=""></img>
                <h1>To-do List</h1>
              </div>
              {/* header - end */}

              {/* form - start */}
              <div className={`my-4`}>
                <Form addTodo={addTodo} />
              </div>
              {/* form - end */}

              {/* task remaining - start */}
              <div className={`text-center`}>
                <p>Pending tasks ({todosRemaining})</p>
              </div>
              {/* task remaining - end */}

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

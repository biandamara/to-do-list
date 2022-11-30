import React, { useEffect, useState } from "react";
import Form from "../components/Form";
import List from "../components/List";

function Home() {
  const [todos, setTodos] = useState([]);

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

  // function add task
  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  // function completed task
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

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <body>
      {/* header - start */}
      <h1>To-do List</h1>
      {/* header - end */}

      {/* form - start */}
      <Form addTodo={addTodo} />
      {/* form - end */}

      {/* to-do list - start */}
      <List
        todos={todos}
        removeTodo={removeTodo}
        toggleComplete={toggleComplete}
      />
      {/* to-do list - end */}
    </body>
  );
}

export default Home;

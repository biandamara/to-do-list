import React, {
  useState,
  // useEffect
} from "react";

// import components
import Form from "../components/Form";
import List from "../components/List";

// import styles
import style from "../assets/styles/Home.module.css";

function Home() {
  return (
    <body>
      {/* header - start */}
      <h1>To-do List</h1>
      {/* header - end */}

      {/* remaining tasks - start */}
      <div></div>
      {/* remaining tasks - end */}

      {/* form task - start */}
      <Form />
      {/* form task - end */}

      {/* list tasks - start */}
      <List />
      {/* list tasks - end */}

      {/* clear all tasks button - start */}
      <button>Clear</button>
      {/* clear all tasks button - end */}
    </body>
  );
}

export default Home;

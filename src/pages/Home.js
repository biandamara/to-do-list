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
  return (
    <body>
      {/* header - start */}
      <h1>To-do List</h1>
      {/* header - end */}

      {/* remaining tasks - start */}
      {/* <div className={`${style.header}`}>Pending tasks ({tasksRemaining})</div> */}
      {/* remaining tasks - end */}

      {/* form task - start */}
      <Form />
      {/* form task - end */}

      {/* list tasks - start */}
      <List />
      {/* list tasks - end */}
    </body>
  );
}

export default Home;

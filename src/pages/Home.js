import React from "react";

// import components
import List from "../component/List";

// import file css
import style from "../assets/styles/Home.module.css";

function Home() {
  return (
    <body className={`${style.body}`}>
      {/* card - start */}
      <div className={`container text-center ${style.card}`}>
        {/* title - start */}
        <h1>To-do List</h1>
        {/* title - end */}

        {/* form - start */}
        <form>
          <input type={"text"} placeholder={"Enter task"}></input>
          <button type={"submit"}>Add</button>
        </form>
        {/* form - end */}

        {/* list - start */}
        <List></List>
        {/* list - end */}
      </div>
      {/* card - end */}
    </body>
  );
}

export default Home;

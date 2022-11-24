import React from "react";

// impor file css
import style from "../assets/styles/Home.module.css";

function Home() {
  return (
    <body className={`${style.body}`}>
      {/* card - start */}
      <div className={`container text-center ${style.card}`}>
        <h1>To-do List</h1>
      </div>
      {/* card - end */}
    </body>
  );
}

export default Home;

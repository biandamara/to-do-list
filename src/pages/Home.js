import React from "react";

// import styles
import style from "../assets/styles/Home.module.css";

function Home() {
  return (
    <body>
      {/* input task form - start */}
      <div className={`${style.form}`}>
        <form>
          <input className={`${style.input}`} placeholder={`Add Task`} />
          <button className={`${style.submit}`} type={`submit`}>
            Add
          </button>
        </form>
        {/* input task form - end */}
      </div>
    </body>
  );
}

export default Home;

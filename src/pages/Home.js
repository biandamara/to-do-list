import React, { Component } from "react";

// import styles
import style from "../assets/styles/Home.module.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] };
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  addTask(task) {
    this.setState((prevState) => {
      return {
        tasks: prevState.tasks.concat(task),
      };
    });
  }

  removeTask(task) {
    this.setState((prevState) => {
      return {
        tasks: prevState.tasks.filter((t) => t !== task),
      };
    });
  }

  render() {
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
}

export default Home;

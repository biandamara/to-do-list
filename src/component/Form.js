import React, { useState } from "react";

// import style
import styles from "../assets/styles/Form.module.css";

function Form(addTask) {
  const [value, setValue] = useState("");

  // handle submit event
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;

    addTask(value);
    setValue("");
  };

  return (
    <body>
      <form onSubmit={handleSubmit}>
        <input
          className={`${styles.input}`}
          type={`text`}
          value={value}
          placeholder={`Add a new task`}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </body>
  );
}

export default Form;

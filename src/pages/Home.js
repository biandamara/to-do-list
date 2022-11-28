import React from "react";

function Home() {
  return (
    <body>
      {/* input task form - start */}
      <div className="form">
        <form>
          <input className="input" placeholder="Add Task" />
          <button className="add-button" type="submit">
            Add
          </button>
        </form>
        {/* input task form - end */}
      </div>
    </body>
  );
}

export default Home;

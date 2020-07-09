import React from "react";

/* --------------------------------- styles --------------------------------- */

import style from "./App.module.css";
import "./app.css";

const App = () => {
  return (
    <>
      <div className={style.green}>locally app css</div>
      <div className="red">global app css</div>
    </>
  );
};

export default App;

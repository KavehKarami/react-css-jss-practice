import React from "react";

/* --------------------------------- styles --------------------------------- */

import style from "./App.module.css";
import "./app.css";

//use JSS
import { useStyles } from "./App.style.js";

const App = () => {
  const theme = {
    background: "#f7df1e",
    color: "#24292e",
  };

  const classes = useStyles({ theme });

  return (
    <>
      <div className={style.green}>locally app css</div>
      <div className="red">global app css</div>
      <div className={classes.myButton}>asasd</div>
    </>
  );
};

export default App;

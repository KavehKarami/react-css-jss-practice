import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

/* --------------------------------- styles --------------------------------- */

import style from "./index.module.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <div className={style.green}>locally index css</div>
    <div className="red">global index css</div>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();

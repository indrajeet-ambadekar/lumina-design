import "./index.scss";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { LuminaProvidor, ToastProvider } from "lumina-design";
import "lumina-design/dist/index.css";

ReactDOM.render(
  <ToastProvider>
    <LuminaProvidor>
      <App />
    </LuminaProvidor>
  </ToastProvider>,
  document.getElementById("root")
);

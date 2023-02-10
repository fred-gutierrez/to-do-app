import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//TODO: AT THE END OF THE PROJECT - Add a login function that allows the user to sign in and depending on the Sign in the notes/tasks are saved accross browsers

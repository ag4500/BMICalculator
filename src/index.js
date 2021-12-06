import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App.jsx";
import Home from "./components/home";
import { Provider } from "react-redux";
import store from "./store";
ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <Home />
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );





import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import usersSliceReducer from "./features/user/UsersSlice";
import * as serviceWorker from "./serviceWorker";

require('typeface-nunito');

const store = configureStore({
  reducer: {
    users: usersSliceReducer,
    // obj: ojSlice.reducer
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App message={"Adebola's react + ts + tailwind starter pack."} />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

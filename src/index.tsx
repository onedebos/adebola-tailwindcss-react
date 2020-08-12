import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore, Action } from "@reduxjs/toolkit";
import PhotosSliceReducer from "./features/photos/PhotoSlice";
import { ThunkAction } from "redux-thunk";
import { PhotoState } from "./features/photos/PhotoSlice";
import "./styles";

import * as serviceWorker from "./serviceWorker";

require("typeface-nunito");

export type AppThunk = ThunkAction<void, PhotoState, unknown, Action<string>>;

const store = configureStore({
  reducer: {
    photosStore: PhotosSliceReducer,
    // anyOtherStore: anyOtherSlice
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

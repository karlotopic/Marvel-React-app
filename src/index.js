import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import mySaga from "./sagas";
import allReducers from "./reducers";
import createSagaMiddleware from "redux-saga";



const sagaMiddleware = createSagaMiddleware();
const myStore = createStore(
  allReducers,
  {},
  // compose(
    applyMiddleware(sagaMiddleware),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  // )
);
sagaMiddleware.run(mySaga);



ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

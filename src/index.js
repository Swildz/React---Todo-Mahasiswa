import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Apps from './Apps';
import App from "./App";
// import Home from './layout/home.container';
// import { Login } from './login/Login';
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
// import reducers from './reducers';
// import Crud from "./crud";
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Login } from './login/Login';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Apps />} />
        <Route path="/dashboard/:userId" element={<App />} />
      </Routes>
    </Provider>
  </BrowserRouter>
  // <React.StrictMode>
  //   <Provider store={store}>
  //     <App />
  //   </Provider>
  // </React.StrictMode>,
);

import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {  HashRouter } from "react-router-dom";
import Spinner from "./Pages/Layout/spinner/Spinner";
import "./css/App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css';





const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  
  <Suspense fallback={<Spinner />}>
    <HashRouter>
      <Provider store={store}>
      <App />
      </Provider>
      <ToastContainer />
    </HashRouter>
  </Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

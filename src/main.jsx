import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import "./locales/index.js";
import { inject } from "@vercel/analytics";
import Loader from "./components/UI/Loader/index.jsx";

inject();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Suspense fallback={<Loader />}>
          <App />
        </Suspense>
      </Router>
    </Provider>
  </React.StrictMode>
);

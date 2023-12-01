import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
// import App from './App.jsx'
import "./index.css";

import "./stylesheets/allignments.css";
import "./stylesheets/custom-components.css";
import "./stylesheets/custom.css";
import "./stylesheets/form-elements.css";
import "./stylesheets/layout.css";
import "./stylesheets/size.css";
import "./stylesheets/text-elements.css";
import "./stylesheets/theme.css";
import store from "./redux/store";
import ProtectedRoute from "./components/ProtectedRoute";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register></Register>} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home></Home>
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login></Login>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

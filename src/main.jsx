// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import Home from "./pages/Home";
// // import App from './App.jsx'
// import "./index.css";

// import "./stylesheets/allignments.css";
// import "./stylesheets/custom-components.css";
// import "./stylesheets/custom.css";
// import "./stylesheets/form-elements.css";
// import "./stylesheets/layout.css";
// import "./stylesheets/size.css";
// import "./stylesheets/text-elements.css";
// import "./stylesheets/theme.css";
// import store from "./redux/store";
// import ProtectedRoute from "./components/ProtectedRoute";
// import { Provider, useSelector } from "react-redux";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       {loading && (
//         <div className="loader-parent">
//           <div className="loader"></div>
//         </div>
//       )}
//       <BrowserRouter>
//         <Routes>
//           <Route path="/register" element={<Register></Register>} />
//           <Route
//             path="/"
//             element={
//               <ProtectedRoute>
//                 <Home></Home>
//               </ProtectedRoute>
//             }
//           />
//           <Route path="/login" element={<Login></Login>} />
//         </Routes>
//       </BrowserRouter>
//     </Provider>
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import ProtectedRoute from "./components/ProtectedRoute";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import "./index.css";
import "remixicon/fonts/remixicon.css";

import "./stylesheets/allignments.css";
import "./stylesheets/custom-components.css";
import "./stylesheets/custom.css";
import "./stylesheets/form-elements.css";
import "./stylesheets/layout.css";
import "./stylesheets/size.css";
import "./stylesheets/text-elements.css";
import "./stylesheets/theme.css";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";

const App = () => (
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route
            path="/register"
            element={
              <Provider store={store}>
                <Register />
              </Provider>
            }
          />
          <Route
            path="/profile"
            element={
              <Provider store={store}>
                <Profile></Profile>
              </Provider>
            }
          />
          <Route
            path="/admin"
            element={
              <Provider store={store}>
                <ProtectedRoute>
                  {" "}
                  <Admin></Admin>
                </ProtectedRoute>
              </Provider>
            }
          />
          <Route
            path="/"
            element={
              <Provider store={store}>
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              </Provider>
            }
          />
          <Route
            path="/login"
            element={
              <Provider store={store}>
                <Login />
              </Provider>
            }
          />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

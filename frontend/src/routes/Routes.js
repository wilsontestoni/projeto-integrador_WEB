import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Courses from "../pages/Courses";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Forgot from "../pages/Forgot";
import Admin from "../pages/Admin";
import User from "../pages/User";
import PrivateRoute from "../components/ProtectedRoute/ProtectedRoute";
import GlobalStyles from "../styles/GlobalStyles";

function AppRoutes() {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route 
          path="/user" 
          element={<PrivateRoute element={<User />} />} />
        <Route
          path="/administrador"
          element={<PrivateRoute element={<Admin />} />}
        />
        <Route path="/cursos/:categoria" element={<Courses />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Signup />} />
        <Route path="/esqueci-a-senha" element={<Forgot />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;

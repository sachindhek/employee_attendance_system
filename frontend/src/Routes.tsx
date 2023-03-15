import React from "react";
import { BrowserRouter, Routes as Router, Route } from "react-router-dom";
import AddEmployee from "./modules/add-employee/AddEmployee";
import Login from "./modules/add-employee/Login";
import Loginbar from "./modules/Navbar";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Loginbar />
      <Router>
        <Route path="/login" element={<Login />} />
        <Route path="/add-employee" element={<AddEmployee />} />
      </Router>
    </BrowserRouter>
  );
};

export default Routes;

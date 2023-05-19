import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./home";
import { Projects } from "./projects";
import { Social } from "./social";

export const AppRoutes = () => (
  <Routes>
    <Route path="/" Component={Home} />
    <Route path="/projects" Component={Projects} />
    <Route path="/social" Component={Social} />
  </Routes>
);

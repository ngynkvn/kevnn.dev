import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./home/home";
import { Projects } from "./projects";
import { Social } from "./social";

export const AppRoutes = () => {
  const location = useLocation();
  return (
    <div>
      <header className="header-container">
        <div className="typewriter" key={location.pathname}>
          {location.pathname}
        </div>
      </header>
      <div className="content-container">
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/projects" Component={Projects} />
          <Route path="/social" Component={Social} />
        </Routes>
      </div>
      <footer className="footer-container">:D</footer>
    </div>
  );
};

import { useLocation } from "react-router-dom";

export const Page = (root: JSX.Element) => {
  const location = useLocation();
  return (
    <div>
      <header className="header-container">
        <div className="typewriter" key={location.pathname}>
          {location.pathname}
        </div>
      </header>
      <div className="content-container">{root}</div>
      <footer className="footer-container">:D</footer>
    </div>
  );
};

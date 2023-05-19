import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./root";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "*",
    element: <Root />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import { createHashRouter } from "react-router-dom";
import { Home } from "./routes/home/home";
import { Page } from "./containers/page";
import { Sidenav } from "./containers/sidenav";
import { Projects } from "./routes/projects";
import { Social } from "./routes/social";
import { Duck } from "./routes/duck";

export const router = createHashRouter([
  {
    path: "/",
    children: [
      {
        path: "duck",
        Component: Duck,
      },
      {
        path: "",
        Component: Sidenav,
        children: [
          {
            path: "",
            Component: () => Page(<Home />),
          },
          {
            path: "projects",
            Component: () => Page(<Projects />),
          },
          {
            path: "social",
            Component: () => Page(<Social />),
          },
        ],
      },
    ],
  },
]);

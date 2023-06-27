import { createHashRouter } from "react-router-dom";
import { Home } from "./routes/home/home";
import { Page } from "./containers/page";
import { Nav } from "./containers/nav";
import { Projects } from "./routes/projects";
import { Social } from "./routes/social";
import { Duck } from "./routes/duck";

export const routes = [
  {
    path: "/",
    children: [
      {
        path: "duck",
        Component: Duck,
      },
      {
        path: "",
        Component: Nav,
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
];

export const router = createHashRouter(routes);

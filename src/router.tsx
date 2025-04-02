import { RouteObject } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";

const routeConfig: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/yoda_frontend",
        element: <Home/>
      },
      {
        path: "*",
        element: (
          <div style={{display : "flex", alignItems : "center", justifyContent : "center"}}>
            <h1>Error : 404 {"(Page not found)"}</h1>
          </div>
        )
      }
      // {
      //   path: "/auth",
      //   element: <Auth />,
      // },
      // {
      //   path: "/home",
      //   element: <Home />,
      // },
      // {
      //   path: "/return",
      //   element: <Return />,
      // },
      // {
      //   path: "/exchange",
      //   element: <Exchange />,
      // },
      // {
      //   path: "/tracker",
      //   element: <Tracker />,
      // },
      // {
      //   path: "*",
      //   element: <>{"Route doesn't exist"}</>,
      // },
    ],
  },
];

export default routeConfig;

import { RouteObject } from "react-router-dom";
import Layout from "./Pages/Layout";

const routeConfig: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    // children: [
    //   {
    //     path: "/auth",
    //     element: <Auth />,
    //   },
    //   {
    //     path: "/home",
    //     element: <Home />,
    //   },
    //   {
    //     path: "/return",
    //     element: <Return />,
    //   },
    //   {
    //     path: "/exchange",
    //     element: <Exchange />,
    //   },
    //   {
    //     path: "/tracker",
    //     element: <Tracker />,
    //   },
    //   {
    //     path: "*",
    //     element: <>{"Route doesn't exist"}</>,
    //   },
    // ],
  },
];

export default routeConfig;

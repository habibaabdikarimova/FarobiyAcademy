import { Navigate } from "react-router-dom";
import NotFound from "../../NotFound";
import Home from "../../Pages/Home";
import About from "../../Component/About";
import Courses from "../../Component/Courses";
import Teachers from "../../Component/Teachers";
import GrafikDizayner from "../../Pages/GrafikDizayner";
import Frontend from "../../Pages/Frontend";
import Foundation from "../../Pages/Foundation";
import VodeoMontaj from "../../Pages/videomontaj";
import Robotexnika from "../../Pages/Robotexnika";
import MinLt from "../../MinLayout/MinLt";

export const routeConfig = [
  {
    id: "1",
    path: "/",
    element: <Home />,
  },
  {
    id: "2",
    path: "/teachers",
    element: <Teachers />,
  },
  {
    id: "3",
    path: "/about",
    element: <About />,
  },
  {
    id: "4",
    path: "/courses",
    element: <Courses />,
  },
  {
    id: "5",
    path: "/minlt",
    element: <MinLt />,
  },
  {
    id: "6",
    path: "/not-found",
    element: <NotFound />,
  },
  {
    id: "-1",
    path: "/",
    element: <Navigate to={"/home"} />,
  },
  {
    id: "-2",
    path: "*",
    element: <Navigate to={"/not-found"} />,
  },
];

export const minRouteConfig = [
  {
    id: "1",
    path: "/foundation",
    element: <Foundation />,
  },
  {
    id: "2",
    path: "/frontend",
    element: <Frontend />,
  },
  {
    id: "3",
    path: "/grafikdizayn",
    element: <GrafikDizayner />,
  },
  {
    id: "4",
    path: "/courses",
    element: <Robotexnika />,
  },

  {
    id: "5",
    path: "/videomontaj",
    element: <VodeoMontaj />,
  },
  {
    id: "-1",
    path: "/",
    element: <Navigate to={"/home"} />,
  },
  {
    id: "-2",
    path: "*",
    element: <Navigate to={"/not-found"} />,
  },
];

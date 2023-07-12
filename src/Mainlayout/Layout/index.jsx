import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { RouteGenerator } from "../../utils/routerGenerator";
import { routeConfig } from "../../utils/ReactRoutesData";


function Layout() {
  return (
    <div>
      <Header />
      {RouteGenerator(routeConfig)}

      <Footer />
    </div>
  );
}

export default Layout;

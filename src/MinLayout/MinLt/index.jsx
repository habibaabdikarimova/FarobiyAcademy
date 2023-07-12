import React from "react";
import { RouteGeneratorMin } from "../../utils/routerGenerator";
import { minRouteConfig } from "../../utils/ReactRoutesData";
import Minlayouthead from "../MinlayoutHead";

function MinLt() {
  return (
    <div>
      <Minlayouthead />
      hello world
      {/* {RouteGeneratorMin(minRouteConfig)} */}
    </div>
  );
}

export default MinLt;

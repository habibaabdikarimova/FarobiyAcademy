import { Route, Routes } from "react-router-dom";

export const RouteGenerator = (routes) => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.id} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export const RouteGeneratorMin = (minRoutes) => {
  return (
    <Routes>
      {minRoutes.map((route) => (
        <Route key={route.id} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

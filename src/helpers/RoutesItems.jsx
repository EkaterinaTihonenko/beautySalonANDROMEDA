import { Route, Routes } from "react-router-dom";
import { APP_ROUTES } from "../constants/appRoutes";

export const RoutesItems = () => {
  return (
    <Routes>
      {APP_ROUTES.map((item, index) => {
        return <Route key={index} path={item.path} element={item.element} />;
      })}
    </Routes>
  );
};

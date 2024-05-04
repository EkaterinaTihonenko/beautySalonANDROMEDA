import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CursorContext } from "../../templates/CursorContext/CursorContext";
import { APP_ROUTES } from "../../../constants/appRoutes";
import { Scrool } from "../../../helpers/scrool";

import style from "./listNavigation.module.css";

export const ListNavigation = () => {
  const activeLink = "active";
  const normalLink = "item";
  const { cursorChangeHandler } = useContext(CursorContext);

  return (
    <>
      {APP_ROUTES.map((item, index) => {
        return (
          <NavLink
            key={index}
            to={item.path}
            className={`${({ isActive }) =>
              isActive ? activeLink : normalLink} ${style.item}`}
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
            onClick={Scrool}
          >
            {item.name}
          </NavLink>
        );
      }).splice(0, 6)}
    </>
  );
};

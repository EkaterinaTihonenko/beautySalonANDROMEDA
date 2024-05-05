import { Link } from "react-router-dom";
import { useContext } from "react";
import { CursorContext } from "../../templates/CursorContext/CursorContext";
import map from "../../../assets/images/map.jpg";

import style from "./map.module.css";

export const Map = () => {
  const { cursorChangeHandler } = useContext(CursorContext);

  return (
    <div className={`${style.item__map} ${"map"}`}>
      <Link
        target="blank"
        to="https://yandex.ru/maps/-/CCUOaAE5~D"
        onMouseEnter={() => cursorChangeHandler("hovered")}
        onMouseLeave={() => cursorChangeHandler("")}
      >
        <img className={style.img__map} src={map} alt="map" loading="lazy" />
      </Link>
    </div>
  );
};

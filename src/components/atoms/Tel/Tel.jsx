import { Link } from "react-router-dom";
import { useContext } from "react";
import { FaPhone } from "react-icons/fa6";
import { CursorContext } from "../../templates/CursorContext/CursorContext";

import style from "./tel.module.css";

export const Tel = ({ classTel, classLink }) => {
  const { cursorChangeHandler } = useContext(CursorContext);

  return (
    <div className={`${classTel || ""} ${style.tel}`}>
      <FaPhone role="img" />
      <Link
        className={`${classLink || ""} ${style.link}`}
        to="tel:+375442222222"
        onMouseEnter={() => cursorChangeHandler("hovered")}
        onMouseLeave={() => cursorChangeHandler("")}
      >
        +375 (44) 222-22-22
      </Link>
    </div>
  );
};

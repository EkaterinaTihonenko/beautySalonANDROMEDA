import { useContext } from "react";
import { Link } from "react-router-dom";
import { CursorContext } from "../../templates/CursorContext/CursorContext";

//import style from "./link.module.css";

export const LinkItem = ({ link, content, classLink }) => {
  const { cursorChangeHandler } = useContext(CursorContext);

  return (
    <Link
      to={link}
      className={classLink || ""}
      onMouseEnter={() => cursorChangeHandler("hovered")}
      onMouseLeave={() => cursorChangeHandler("")}
    >
      {content}
    </Link>
  );
};

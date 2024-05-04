import { useContext } from "react";
import { CursorContext } from "../../templates/CursorContext/CursorContext";

import style from "./btn.module.css";

export const Btn = ({ typeBtn, classBtn, id, content, disabled, onClick }) => {
  const { cursorChangeHandler } = useContext(CursorContext);

  return (
    <button
      className={`${classBtn} ${style.btn}`}
      id={id}
      type={typeBtn}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => cursorChangeHandler("hovered")}
      onMouseLeave={() => cursorChangeHandler("")}
    >
      {content}
    </button>
  );
};

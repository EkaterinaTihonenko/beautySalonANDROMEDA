import { useContext } from "react";
import { CursorContext } from "../../templates/CursorContext/CursorContext";

import style from "./input.module.css";

export const Input = ({ typeInput, idInput, classInput, placeholderInput }) => {
  const { cursorChangeHandler } = useContext(CursorContext);

  return (
    <input
      type={typeInput}
      id={idInput}
      className={`${style.input} ${classInput || ""}`}
      placeholder={placeholderInput}
      onMouseEnter={() => cursorChangeHandler("hovered")}
      onMouseLeave={() => cursorChangeHandler("")}
    />
  );
};

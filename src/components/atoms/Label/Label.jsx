import { useContext } from "react";
import { CursorContext } from "../../templates/CursorContext/CursorContext";

import style from "./label.module.css";

export const Label = ({ forLabel, classLabel, content }) => {
  const { cursorChangeHandler } = useContext(CursorContext);

  return (
    <label
      htmlFor={forLabel}
      className={`${style.label} ${classLabel}`}
      onMouseEnter={() => cursorChangeHandler("hovered")}
      onMouseLeave={() => cursorChangeHandler("")}
    >
      {content}
    </label>
  );
};

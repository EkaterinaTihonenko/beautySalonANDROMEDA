import React, { useContext } from "react";
import useMousePosition from "../../../hooks/useMousePosition";
import { CursorContext } from "../../templates/CursorContext/CursorContext";

import "./cursor.css";

export const Cursor = () => {
  const { cursorType } = useContext(CursorContext);
  const { x, y } = useMousePosition();
  return (
    <div className="cursor">
      <div
        style={{ left: `${x}px`, top: `${y}px` }}
        className={"ring " + cursorType}
      ></div>
      <div
        className={"dot " + cursorType}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
    </div>
  );
};

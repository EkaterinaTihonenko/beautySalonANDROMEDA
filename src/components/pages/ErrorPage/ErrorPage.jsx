import { useContext } from "react";
import { Title } from "../../atoms";
import style from "./errorPage.module.css";
import { CursorContext } from "../../templates/CursorContext/CursorContext";
import { Cursor } from "../../atoms/Cursor/Cursor";

export const ErrorPage = () => {
  const { cursorChangeHandler } = useContext(CursorContext);

  return (
    <div
      className={style.box}
      onMouseEnter={() => cursorChangeHandler("hovered")}
      onMouseLeave={() => cursorChangeHandler("")}
    >
      <Cursor />
      <Title classTitle={style.title} content={404} />
    </div>
  );
};

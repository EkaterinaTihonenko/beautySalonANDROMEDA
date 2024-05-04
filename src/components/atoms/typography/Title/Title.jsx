import style from "./title.module.css";

export const Title = ({ content, classTitle }) => {
  return <h1 className={`${style.title} ${classTitle || ""}`}>{content}</h1>;
};

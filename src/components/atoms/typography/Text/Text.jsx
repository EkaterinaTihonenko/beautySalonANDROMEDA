import style from "./text.module.css";

export const Text = ({ content, classText }) => {
  return <p className={`${style.text} ${classText || ""}`}>{content}</p>;
};

import style from "./titleBlock.module.css";

export const TitleBlock = ({ content, classTtileBlock }) => {
  return (
    <h3 className={`${style.title__block} ${classTtileBlock || ""}`}>
      {content}
    </h3>
  );
};

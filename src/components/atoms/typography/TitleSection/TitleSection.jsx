import style from "./titleSection.module.css";

export const TitleSection = ({ content, classSection }) => {
  return (
    <h2 className={`${style.title__section} ${classSection || ""}`}>
      {content}
    </h2>
  );
};

import style from "./textSpan.module.css";

export const TextSpan = ({
  content,
  classTextSpan,
  onClick,
  onMouseEnter,
  onMouseLeave,
  id,
}) => {
  return (
    <span
      className={`${style.text__span} ${classTextSpan || ""}`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      id={id}
    >
      {content}
    </span>
  );
};

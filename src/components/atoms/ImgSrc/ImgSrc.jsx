import style from "./imgSrc.module.css";

export const ImgSrc = ({ classImg, content, altContent, loading }) => {
  return (
    <img
      className={`${style.img} ${classImg || ""}`}
      src={content}
      alt={altContent}
      loading={loading}
    />
  );
};

import { Link } from "react-router-dom";
import { useContext } from "react";
import { CursorContext } from "../../templates/CursorContext/CursorContext";
import { ImgSrc, Text, TitleBlock } from "../../atoms";
import { List } from "../List";

import style from "./card.module.css";

export const Card = ({
  classCard,
  smile,
  img,
  alt,
  titleCard,
  textCard,
  link,
  list,
  imgCard,
  imgCardClass,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  const { cursorChangeHandler } = useContext(CursorContext);

  return (
    <div
      className={`${classCard} ${style.card}`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {imgCard && (
        <ImgSrc
          classImg={imgCardClass}
          content={imgCard}
          altContent={alt}
          loading="lazy"
        />
      )}
      {smile && <div className={style.card__block}>{smile}</div>}
      {titleCard && (
        <TitleBlock classTtileBlock={style.card__name} content={titleCard} />
      )}
      {textCard && <Text classText={style.card__text} content={textCard} />}

      {link && (
        <Link
          className={style.card__link}
          to={`/${link}`}
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          <ImgSrc
            classImg={style.arrow}
            content={img}
            altContent={alt}
            loading="lazy"
          />
        </Link>
      )}

      {list && <List content={list} classList={style.list} />}
    </div>
  );
};

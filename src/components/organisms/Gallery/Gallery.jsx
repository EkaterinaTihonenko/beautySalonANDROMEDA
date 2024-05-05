import { useContext, useState } from "react";
import { Btn, ImgSrc } from "../../atoms";
import { IsLike } from "../../molecules/IsLike";
import { CursorContext } from "../../templates/CursorContext/CursorContext";
import { galleryList } from "../../../constants/galleryList";

import style from "./gallery.module.css";

export const Gallery = () => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("countLike")) || galleryList
  );
  const [file, setFile] = useState();
  const { cursorChangeHandler } = useContext(CursorContext);

  const handleCount = (id) => {
    const listCard = items.map((item) => {
      if (item.id === id) {
        item.countLike++;
      }
      return item;
    });
    setItems(listCard);
    localStorage.setItem("countLike", JSON.stringify(listCard));
  };

  return (
    <div className={style.container}>
      <div className={style.media__wrapp}>
        {items.map((file) => (
          <div key={file.id}>
            <div
              className={style.media}
              onClick={() => setFile(file)}
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
            >
              {file.type === "img" ? (
                <ImgSrc
                  classImg={style.img}
                  content={file.url}
                  altContent="img"
                  loading="lazy"
                />
              ) : (
                <video
                  className={style.video}
                  src={`${file.url}#t=0.001`}
                  muted
                  preload="metadata"
                  loading="lazy"
                />
              )}
            </div>
            <IsLike
              countLike={file.countLike}
              id={file.id}
              handleCount={handleCount}
            />
          </div>
        ))}
      </div>

      <div
        className={style.popup__media}
        style={{ display: file ? "block" : "none" }}
      >
        <Btn
          classBtn={style.popup__btn}
          typeBtn="button"
          onClick={() => setFile(null)}
          content="&times;"
        />

        {file?.type === "video" ? (
          <video
            className={style.popup__video}
            src={file?.url}
            muted
            autoPlay
            controls
            loading="lazy"
          />
        ) : (
          <ImgSrc
            classImg={style.popup__img}
            content={file?.url}
            altContent="img"
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
};

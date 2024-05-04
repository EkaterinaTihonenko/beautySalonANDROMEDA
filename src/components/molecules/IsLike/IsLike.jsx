import { FaHeart } from "react-icons/fa";
import { Btn, TextSpan } from "../../atoms";

import style from "./isLike.module.css";

export const IsLike = ({ id, countLike, handleCount }) => {
  return (
    <div className={style.is_like}>
      <Btn
        classBtn={style.Btn}
        onClick={() => handleCount(id)}
        typeBtn="button"
        content={
          <>
            <TextSpan
              classTextSpan={style.leftContainer}
              content={
                <>
                  <FaHeart role="button" />
                  <span className={style.like}>Like</span>
                </>
              }
            />
            <TextSpan
              classTextSpan={style.likeCount}
              id={id}
              content={countLike}
            />
          </>
        }
      />
    </div>
  );
};

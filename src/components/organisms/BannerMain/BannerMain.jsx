import { AnimationPulse, ImgSrc, LinkItem, Text, Title } from "../../atoms";
import { bannerList } from "../../../constants/bannerList";
import { HashLink } from "react-router-hash-link";
import { List } from "../../molecules";
import girl from "../../../assets/images/girl.png";
import { useContext } from "react";
import { CursorContext } from "../../templates/CursorContext/CursorContext";

import style from "./bannerMain.module.css";

export const BannerMain = () => {
  const { cursorChangeHandler } = useContext(CursorContext);

  return (
    <div className={style.banner}>
      <div className={style.banner__content}>
        <ImgSrc
          classImg={style.img}
          content={girl}
          altContent="girl"
          loading="eager"
        />
        <div className={`${style.order} ${"d-flex"}`}>
          <Title content="ANDROMEDA" />
          <Text
            classText={style.info}
            content="БЬЮТИ ПРОСТРАНСТВО ТВОЕГО ГОРОДА"
          />
          <List classList={`${style.list} "d-flex"`} content={bannerList} />
          <div className={style.links}>
            <LinkItem
              link="/vacancys"
              classLink={style.link_vacancys}
              content="хочу у вас работать"
            />
            <HashLink
              to="#form"
              className={style.link_get}
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
            >
              запись
            </HashLink>
          </div>
        </div>
        <AnimationPulse />
      </div>
    </div>
  );
};

import { useContext } from "react";
import { CursorContext } from "../../../templates/CursorContext/CursorContext";
import { ImgSrc, Text, TitleSection } from "../../../atoms";
import { SectionTemplate } from "../../../templates";
import { PartnersList } from "../../../../constants/PartnersList";

import style from "./partnersSection.module.css";
import "../../../../styles/bgTextSection.css";

export const PartnersSection = () => {
  const { cursorChangeHandler } = useContext(CursorContext);

  return (
    <SectionTemplate
      classSection={style.section}
      contentSection={
        <>
          <Text classText={"bg__text"} content="партнеры" />
          <TitleSection content={<>ПАРТНЕРЫ</>} />
          <div className={style.items}>
            {PartnersList.map((item, index) => {
              return (
                <div
                  className={style.item}
                  key={index}
                  onMouseEnter={() => cursorChangeHandler("hovered")}
                  onMouseLeave={() => cursorChangeHandler("")}
                >
                  <ImgSrc
                    classImg={style.img}
                    content={item.partner}
                    altContent="logo"
                    loading="lazy"
                  />
                </div>
              );
            })}
          </div>
        </>
      }
    />
  );
};

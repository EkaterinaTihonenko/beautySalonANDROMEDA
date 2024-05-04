import { useContext } from "react";
import { CursorContext } from "../../../templates/CursorContext/CursorContext";
import { Text, TitleSection } from "../../../atoms";
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
                  <img className={style.img} src={item.partner} alt="logo" />
                </div>
              );
            })}
          </div>
        </>
      }
    />
  );
};

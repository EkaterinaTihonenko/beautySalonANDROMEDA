import { Text, TitleSection } from "../../../atoms";
import SliderSwiper from "../../../molecules/SliderSwiper/SliderSwiper";
import { SectionTemplate } from "../../../templates";
import { textSectionAboutUs } from "../../../../constants/textSectionAboutUs";

import style from "./aboutUsSection.module.css";
import "../../../../styles/bgTextSection.css";

export const AboutUsSection = () => {
  return (
    <SectionTemplate
      classSection={style.container}
      contentSection={
        <div className={`${style.about_box} ${"d-flex"}`}>
          <div className={`${style.about_content} ${"container"}`}>
            <Text classText={"bg__text"} content="О НАС" />
            <TitleSection content="О НАС" />
            <div className={style.about_info}>
              {textSectionAboutUs.map((item, index) => {
                return (
                  <Text
                    key={index}
                    classText={style.about_text}
                    content={item.text}
                  />
                );
              })}
            </div>
          </div>
          <SliderSwiper />
        </div>
      }
    />
  );
};

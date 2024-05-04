import { cardList } from "../../../../constants/cardList";
import { Text, TitleSection } from "../../../atoms";
import { Card } from "../../../molecules";
import { SectionTemplate } from "../../../templates";

import style from "./advantagesSection.module.css";
import "../../../../styles/bgTextSection.css";

export const AdvantagesSection = () => {
  return (
    <SectionTemplate
      contentSection={
        <div className={style.box}>
          <Text classText={"bg__text"} content="ПРЕИМУЩЕСТВА" />
          <TitleSection
            content={
              <>
                Преимущества <br /> работы у нас
              </>
            }
          />
          <div className={style.cards}>
            {cardList.map((item, index) => {
              return (
                <Card
                  key={index}
                  classCard={style.card}
                  smile={item.smile}
                  img={item.img}
                  alt={item.alt}
                  titleCard={item.title}
                  textCard={item.text}
                  link={item.link}
                />
              );
            })}
          </div>
        </div>
      }
    />
  );
};

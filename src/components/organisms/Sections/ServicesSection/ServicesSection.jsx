import { Text, TitleSection } from "../../../atoms";
import { Card } from "../../../molecules";
import { SectionTemplate } from "../../../templates";
import { servicesList } from "../../../../constants/servicesList";

import style from "./servicesSection.module.css";
import "../../../../styles/bgTextSection.css";

export const ServicesSection = () => {
  return (
    <SectionTemplate
      contentSection={
        <>
          <Text classText={"bg__text"} content="УСЛУГИ" />
          <TitleSection
            content={
              <>
                Услуги <br /> наших специалистов
              </>
            }
          />
          <div className={style.cards}>
            {servicesList.map((item, index) => {
              return (
                <Card
                  key={index}
                  classCard={style.card__wrapp}
                  titleCard={item.title}
                  list={item.list}
                />
              );
            })}
          </div>
        </>
      }
    />
  );
};

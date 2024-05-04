import { Text, TextSpan, TitleSection } from "../../../atoms";
import { SectionTemplate } from "../../../templates";

import style from "./trainingSection.module.css";
import "../../../../styles/bgTextSection.css";
import { Accordion } from "../../Accordion";

export const TrainingSection = () => {
  return (
    <SectionTemplate
      contentSection={
        <>
          <Text classText={"bg__text"} content="ОБУЧЕНИЕ" />
          <TitleSection classSection={style.title} content={<>Обучение</>} />
          <div className={style.block__wrap}>
            <TextSpan content="В Бьюти Базе ты cможешь обрести востребованную профессию с нуля или повысить текущую квалификацию. Стань успешным мастером Бьюти индустрии вместе с нами!" />
            <Accordion />
          </div>
        </>
      }
    />
  );
};

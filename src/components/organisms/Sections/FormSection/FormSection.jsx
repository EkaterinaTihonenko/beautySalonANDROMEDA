import { ImgSrc, Text, TitleSection } from "../../../atoms";
import { SectionTemplate } from "../../../templates";
import girl from "../../../../assets/images/girl2.png";
import bgColor from "../../../../assets/images/color1.svg";

import style from "./formSection.module.css";
import "../../../../styles/bgTextSection.css";
import { Form } from "../../../molecules";

export const FormSection = () => {
  return (
    <SectionTemplate
      id="form"
      contentSection={
        <>
          <Text classText={"bg__text"} content="ЗАПИСЬ" />
          <TitleSection
            content={
              <>
                ОСТАВЬ ЗАЯВКУ —
                <br />
                МЫ С ВАМИ СВЯЖЕМСЯ
              </>
            }
          />
          <div className={`${"d-flex"} ${style.form__wrap}`}>
            <Form />
            <div className={style.order__right}>
              <div className={style.order__block}></div>
              <ImgSrc
                classImg={style.order__girl}
                content={girl}
                altContent="img"
                loading="lazy"
              />
              <ImgSrc
                classImg={style.order__colors}
                content={bgColor}
                altContent="img"
                loading="lazy"
              />
            </div>
          </div>
        </>
      }
    />
  );
};

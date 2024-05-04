import { Text, TextSpan } from "../../atoms";
import style from "./cardAccordion.module.css";

export const CardAccordion = ({ titleItem, price, time, text, limit }) => {
  return (
    <>
      {titleItem && (
        <div className={style.tab__item}>
          <Text classText={style.tab__item_title} content={titleItem} />
        </div>
      )}
      {price && (
        <div className={style.tab__items}>
          {price && (
            <div className={style.tab__item}>
              <Text content="Стоимость - &ensp;" />
              <TextSpan content={price} />
            </div>
          )}
          {time && (
            <div className={style.tab__col}>
              <div className={style.tab__item}>
                <Text content="Время проведения &ensp;" />
                <TextSpan content={time} />
              </div>
              <Text content="Теория и отработка на модели" />
            </div>
          )}
          {text && (
            <div className={style.tab__item}>
              <Text content={text} />
            </div>
          )}
          {limit && (
            <>
              <div className={style.tab__item}>
                <Text content="Курсы проводятся &ensp;" />
                <TextSpan content={limit} />
              </div>
              <div className={style.tab__item}>
                <Text content="По окончанию курса ты получишь сертификат и договор о прохождении курса" />
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

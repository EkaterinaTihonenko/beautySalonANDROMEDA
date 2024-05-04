import { CardAccordion } from "../CardAccordion";
import style from "./itemTraining.module.css";

export const ItemTraining = ({ content }) => {
  return (
    <div className={style.wrapp}>
      {content.map((item, index) => {
        return (
          <CardAccordion
            key={index}
            titleItem={item.titleItem}
            price={item.price}
            time={item.time}
            text={item.text}
            limit={item.limit}
          />
        );
      })}
    </div>
  );
};

import { AccordionItem } from "../../molecules";
import { trainingList } from "../../../constants/trainingList";
import style from "./accordion.module.css";

export const Accordion = () => {
  return (
    <div className={style.accordion}>
      {trainingList.map((item, index) => {
        return (
          <AccordionItem
            key={index}
            id={item.id}
            title={item.title}
            content={item.list}
          />
        );
      })}
    </div>
  );
};

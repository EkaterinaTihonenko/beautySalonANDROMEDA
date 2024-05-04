import { useEffect, useState } from "react";
import { Input, Label } from "../../atoms";
import { CardAccordion } from "../CardAccordion";
import style from "./accordionItem.module.css";
import Loader from "../../atoms/Loader/Loader";

export const AccordionItem = ({ id, title, content }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <div className={style.tab}>
        <Input classInput={style.tab_input} typeInput="checkbox" idInput={id} />
        <Label classLabel={style.tab_label} forLabel={id} content={title} />
        <div className={style.tab_content}>
          {content.map((item, index) => {
            return <CardAccordion key={index} titleItem={item.titleItem} />;
          })}
        </div>
      </div>
    </>
  );
};

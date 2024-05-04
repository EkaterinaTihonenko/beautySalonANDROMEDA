import { ListItem } from "../../atoms";
import style from "./list.module.css";

export const List = ({ classList, content }) => {
  return (
    <ul className={`${style.items} ${classList || ""} `}>
      {content.map((item, index) => {
        return (
          <ListItem
            key={index}
            smile={item.smile}
            text={item.text}
            price={item.price}
          />
        );
      })}
    </ul>
  );
};

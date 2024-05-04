import { TextSpan } from "../TextSpan";

import style from "./listItem.module.css";

export const ListItem = ({ classList, smile, text, price }) => {
  return (
    <li className={`${style.list__item} ${classList || ""}`}>
      {smile === undefined ? "" : <>{smile}</>}
      {text === undefined ? "" : <>{text}</>}
      {price === undefined ? "" : <TextSpan content={price} />}
    </li>
  );
};

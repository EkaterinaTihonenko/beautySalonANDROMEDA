import { useState } from "react";
import { ItemTraining } from "../ItemTraining";
import { trainingList } from "../../../constants/trainingList";

import style from "./tabs.module.css";
import { Btn } from "../../atoms";

export const Tabs = () => {
  const [currontTab, setCurrontTab] = useState("chck1");

  const handleTabClick = (e) => {
    setCurrontTab(e.target.id);
  };

  return (
    <div>
      <div className={style.tabs}>
        {trainingList.map((item, index) => {
          return (
            <Btn
              classBtn={style.btn}
              key={index}
              id={item.id}
              typeBtn="button"
              disabled={currontTab === `${item.id}`}
              onClick={handleTabClick}
              content={item.title}
            />
          );
        })}
      </div>
      <div>
        {trainingList.map((item, index) => {
          return (
            <div key={index}>
              {currontTab === `${item.id}` && (
                <>
                  <ItemTraining content={item.list} />
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

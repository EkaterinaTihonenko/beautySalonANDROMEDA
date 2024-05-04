import { useContext, useEffect, useState } from "react";
import Loader from "../../atoms/Loader/Loader";
import { Cursor } from "../../atoms/Cursor/Cursor";
import { TitleSection } from "../../atoms";
import { Card, Modal } from "../../molecules";
import { CursorContext } from "../../templates/CursorContext/CursorContext";
import { SaleList } from "../../../constants/saleList";

import style from "./salesPage.module.css";

export const SalesPage = ({ active }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [modalActive, setModalActive] = useState(false);
  const { cursorChangeHandler } = useContext(CursorContext);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <Cursor />
      <main>
        <TitleSection content="Акции" classSection={style.title__section} />
        <div className={style.wrapp}>
          {SaleList.map((item) => {
            return (
              <div key={item.id}>
                <Card
                  classCard={`${active} ? ${`${style.card}${style.active}`} : ${
                    style.card
                  }`}
                  onClick={() => setModalActive(item.id)}
                  imgCardClass={style.img}
                  imgCard={item.img}
                  alt="sale"
                  classText={style.card__text}
                  textCard={item.text}
                  onMouseEnter={() => cursorChangeHandler("hovered")}
                  onMouseLeave={() => cursorChangeHandler("")}
                />
                <Modal
                  modalActive={modalActive === item.id}
                  onClose={() => setModalActive(false)}
                >
                  <div className={style.text}>{item.content}</div>
                </Modal>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};
